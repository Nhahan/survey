import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';
import { SurveyService } from '../service/survey.service';
import { RegisterQuestionRequest } from '../dto/request/register-question.request';
import { QuestionService } from '../service/question.service';
import { RegisterOptionRequest } from '../dto/request/register-option.request';
import { OptionService } from '../service/option.service';
import { RegisterAnswerRequest } from '../dto/request/register-answer.request';
import { AnswerService } from '../service/answer.service';
import { SurveyResponse } from '../dto/response/survey.response';

@AutoInjectable()
export class SurveyFacade {
  constructor(
    private readonly surveyService: SurveyService,
    private readonly questionService: QuestionService,
    private readonly optionService: OptionService,
    private readonly answerService: AnswerService,
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

  async registerAnswer(request: RegisterAnswerRequest) {
    const question = await this.questionService.findQuestion(request.questionId);
    const option = await this.optionService.findOption(request.optionId);
    return await this.answerService.save(question, option);
  }

  async getSurvey(id: number) {
    const survey = await this.surveyService.findSurvey(id);
    const questionsWithAnswers = await this.questionService.findQuestionsWithAnswers(survey);
    return SurveyResponse.from(survey, questionsWithAnswers);
  }
}
