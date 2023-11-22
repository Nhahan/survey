import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { SurveyResultRepository } from '../repository/survey-result.repository';
import { SurveyResult } from '../entity/survey-result.entity';
import { SurveyResultResponse } from '../dto/survey-result.request';
import { Survey } from '../../survey/entity/survey.entity';

@AutoInjectable()
export class SurveyResultService {
  constructor(private readonly surveyResultRepository: SurveyResultRepository) {}

  findSurveyResult(id: number) {
    return this.surveyResultRepository.findSurveyResultById(id);
  }

  save(request: SurveyResultResponse, survey: Survey) {
    const surveyResult = SurveyResult.from(request, survey);
    return this.surveyResultRepository.saveSurveyResult(surveyResult);
  }
}
