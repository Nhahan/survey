import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { SurveyRepository } from '../repository/survey.repository';
import { Survey } from '../entity/survey.entity';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';

@AutoInjectable()
export class SurveyService {
  constructor(private readonly surveyRepository: SurveyRepository) {}

  save(request: RegisterSurveyRequest) {
    const survey = Survey.fromRegisterSurveyRequest(request);
    return this.surveyRepository.saveSurvey(survey);
  }

  findSurvey(id: number) {
    return this.surveyRepository.findSurveyById(id);
  }
}
