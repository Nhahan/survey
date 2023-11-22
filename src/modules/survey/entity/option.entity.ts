import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';
import { Question } from './question.entity';
import { RegisterOptionRequest } from '../dto/request/register-option.request';

@Entity()
export class Option extends BaseEntity {
  @Column()
  content: string;

  @Column()
  score: number;

  @ManyToOne(() => Question)
  question: Question;

  static fromRegisterOptionRequest(request: RegisterOptionRequest, question: Question) {
    const option = new Option();
    option.content = request.content;
    option.score = request.score;
    option.question = question;
    return option;
  }
}
