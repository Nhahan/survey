import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';
import { Survey } from '../../survey/entity/survey.entity';

@Entity()
export class SurveyResult extends BaseEntity {
  @ManyToOne(() => Survey)
  survey: Survey;

  @Column({ nullable: false })
  userIp: string;
}
