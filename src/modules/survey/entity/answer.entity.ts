import { Entity, ManyToOne } from 'typeorm';
import { Question } from './question.entity';
import { BaseEntity } from '../../../common/orm/base.entity';

@Entity()
export class Answer extends BaseEntity {
  @ManyToOne(() => Question)
  question: Question;
}
