import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { RegisterQuestionRequest } from '../dto/request/register-question.request';
import { QuestionRepository } from '../repository/question.repository';
import { Question } from '../entity/question.entity';
import { Survey } from '../entity/survey.entity';
import { BadRequestException } from '@nestjs/common';

@AutoInjectable()
export class QuestionService {
  constructor(private readonly questionRepository: QuestionRepository) {}

  save(request: RegisterQuestionRequest, survey: Survey) {
    const question = Question.fromRegisterQuestionRequest(request, survey);
    return this.questionRepository.saveQuestion(question);
  }

  async findQuestion(id: number) {
    const question = await this.questionRepository.findQuestionById(id);
    if (!question) {
      throw new BadRequestException('Question not found');
    }
    return question;
  }
  findQuestionsWithAnswers(survey: Survey) {
    return this.questionRepository.findQuestionsWithAnswers(survey);
  }
}
