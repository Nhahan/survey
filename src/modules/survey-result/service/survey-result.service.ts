import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { SurveyResultRepository } from '../repository/survey-result.repository';
import { SurveyResult } from '../entity/survey-result.entity';
import { SurveyResultResponse } from '../dto/survey-result.request';
import { Survey } from '../../survey/entity/survey.entity';
import { BadRequestException } from '@nestjs/common';

@AutoInjectable()
export class SurveyResultService {
  constructor(private readonly surveyResultRepository: SurveyResultRepository) {}

  async findSurveyResult(id: number) {
    const surveyResult = await this.surveyResultRepository.findSurveyResultById(id);
    if (!surveyResult) {
      throw new BadRequestException('Survey Result not found');
    }
    return surveyResult;
  }

  save(request: SurveyResultResponse, survey: Survey) {
    const surveyResult = SurveyResult.from(request, survey);
    return this.surveyResultRepository.saveSurveyResult(surveyResult);
  }
}
