import { Entity, ManyToOne } from 'typeorm';
import { Question } from './question.entity';
import { BaseEntity } from '../../../common/orm/base.entity';
import { Option } from './option.entity';

@Entity()
export class Answer extends BaseEntity {
  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Option)
  option: Option;

  static fromRegisterAnswerRequest(question: Question, option: Option) {
    const answer = new Answer();
    answer.question = question;
    answer.option = option;
    return answer;
  }
}
