import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Question } from '../entity/question.entity';
import { SQL_ERROR } from '../../../common/error/error.constant';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { Survey } from '../entity/survey.entity';

@CustomRepository({ entity: Question })
export class QuestionRepository extends Repository<Question> {
  saveQuestion(question: Question) {
    try {
      return this.save(question);
    } catch (e) {
      if (e.code === SQL_ERROR.ER_DUP_ENTRY) {
        throw new BadRequestException('Question already exists');
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async findQuestionById(id: number) {
    return this.findOne({ where: { id } });
  }

  findQuestionsWithAnswers(survey: Survey): Promise<Question[]> {
    return this.find({
      where: { survey: survey },
      relations: ['options'],
    });
  }
}
