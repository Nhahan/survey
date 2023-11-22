import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';
import { Question } from './question.entity';

@Entity()
export class Option extends BaseEntity {
  @Column()
  content: string;

  @Column()
  score: number;

  @ManyToOne(() => Question)
  question: Question;
}
