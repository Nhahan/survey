import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Question } from '../entity/question.entity';

@CustomRepository({ entity: Question })
export class QuestionRepository extends Repository<Question> {
  saveQuestion(question: Question) {
    return this.save(question);
  }

  async findQuestionById(id: number) {
    return this.findOne({ where: { id } });
  }
}
