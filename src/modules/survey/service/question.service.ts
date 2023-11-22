import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { RegisterQuestionRequest } from '../dto/request/register-question.request';
import { QuestionRepository } from '../repository/question.repository';
import { Question } from '../entity/question.entity';
import { Survey } from '../entity/survey.entity';

@AutoInjectable()
export class QuestionService {
  constructor(private readonly questionRepository: QuestionRepository) {}

  save(request: RegisterQuestionRequest, survey: Survey) {
    const question = Question.fromRegisterQuestionRequest(request, survey);
    return this.questionRepository.saveQuestion(question);
  }
}
