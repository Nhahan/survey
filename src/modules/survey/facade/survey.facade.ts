import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';
import { SurveyService } from '../service/survey.service';
import { RegisterQuestionRequest } from '../dto/request/register-question.request';
import { QuestionService } from '../service/question.service';
import { RegisterOptionRequest } from '../dto/request/register-option.request';
import { OptionService } from '../service/option.service';

@AutoInjectable()
export class SurveyFacade {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService,
  ) {}

  registerSurvey(request: RegisterSurveyRequest) {
    return this.surveyService.save(request);
  }

  async registerQuestion(request: RegisterQuestionRequest) {
    const survey = await this.surveyService.findSurvey(request.surveyId);
    return this.questionService.save(request, survey);
  }

  async registerOption(request: RegisterOptionRequest) {
    const question = await this.questionService.findQuestion(request.questionId);
    return this.optionService.save(request, question);
  }
}
