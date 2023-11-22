import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { SQL_ERROR } from '../../../common/error/error.constant';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { SurveyResult } from '../entity/survey-result.entity';

@CustomRepository({ entity: SurveyResult })
export class SurveyResultRepository extends Repository<SurveyResult> {
  saveSurveyResult(surveyResult: SurveyResult) {
    try {
      return this.save(surveyResult);
    } catch (e) {
      if (e.code === SQL_ERROR.ER_DUP_ENTRY) {
        throw new BadRequestException('SurveyResult already exists');
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }

  findSurveyResultById(id: number) {
    return this.findOne({ where: { id } });
  }
}
