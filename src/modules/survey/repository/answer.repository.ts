import { CustomRepository } from '../../../common/orm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Answer } from '../entity/answer.entity';

@CustomRepository({ entity: Answer })
export class AnswerRepository extends Repository<Answer> {
  saveAnswer(answer: Answer) {
    return this.save(answer);
  }

  findAnswerById(id: number) {
    return this.findOne({ where: { id } });
  }
}
