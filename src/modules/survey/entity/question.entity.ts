import { Column, Entity, ManyToOne } from 'typeorm';
import { Survey } from './survey.entity';
import { BaseEntity } from '../../../common/orm/base.entity';

@Entity()
export class Question extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => Survey)
  survey: Survey;
}
