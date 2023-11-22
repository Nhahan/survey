import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Answer } from '../entity/answer.entity';
import { SQL_ERROR } from '../../../common/error/error.constant';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';

@CustomRepository({ entity: Answer })
export class AnswerRepository extends Repository<Answer> {
  saveAnswer(answer: Answer) {
    try {
      return this.save(answer);
    } catch (e) {
      if (e.code === SQL_ERROR.ER_DUP_ENTRY) {
        throw new BadRequestException('Answer already exists');
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  findAnswerById(id: number) {
    return this.findOne({ where: { id } });
  }
}
