import { SurveyService } from '../../survey/service/survey.service';
import { SurveyResultResponse } from '../dto/survey-result.request';
import { SurveyResultService } from '../service/survey-result.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveyResultFacade {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly surveyResultService: SurveyResultService,
  ) {}

  async registerSurveyResult(request: SurveyResultResponse) {
    const survey = await this.surveyService.findSurvey(request.surveyId);
    return this.surveyResultService.save(request, survey);
  }

  getSurveyResult(id: number) {
    return this.surveyResultService.findSurveyResult(id);
  }
}
