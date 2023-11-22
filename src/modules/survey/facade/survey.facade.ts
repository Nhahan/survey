import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';
import { SurveyService } from '../service/survey.service';

@AutoInjectable()
export class SurveyFacade {
  constructor(private readonly surveyService: SurveyService) {}

  async registerSurvey(request: RegisterSurveyRequest) {
    this.surveyService.save(request);
  }
}
