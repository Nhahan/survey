import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';
import { Question } from '../../survey/entity/question.entity';
import { Survey } from '../../survey/entity/survey.entity';

@Entity()
export class SurveyResult extends BaseEntity {
  @ManyToOne(() => Survey)
  survey: Survey;

  @ManyToOne(() => Question)
  question: Question;
}
