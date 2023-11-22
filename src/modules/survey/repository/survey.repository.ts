import { Survey } from '../entity/survey.entity';
import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { SQL_ERROR } from '../../../common/error/error.constant';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';

@CustomRepository({ entity: Survey })
export class SurveyRepository extends Repository<Survey> {
  saveSurvey(survey: Survey) {
    try {
      return this.save(survey);
    } catch (e) {
      if (e.code === SQL_ERROR.ER_DUP_ENTRY) {
        throw new BadRequestException('Survey already exists');
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  findSurveyById(id: number) {
    return this.findOne({ where: { id } });
  }
}
