import { AutoInjectable } from '@tiny-nestjs/auto-injectable';
import { Option } from '../entity/option.entity';
import { Question } from '../entity/question.entity';
import { BadRequestException } from '@nestjs/common';
import { Answer } from '../entity/answer.entity';
import { AnswerRepository } from '../repository/answer.repository';

@AutoInjectable()
export class AnswerService {
  constructor(private readonly answerRepository: AnswerRepository) {}

  save(question: Question, option: Option) {
    const answer = Answer.fromRegisterAnswerRequest(question, option);
    return this.answerRepository.saveAnswer(answer);
  }

  async findAnswer(id: number) {
    const answer = await this.answerRepository.findAnswerById(id);
    if (!answer) {
      throw new BadRequestException('Answer not found');
    }
    return answer;
  }
}
