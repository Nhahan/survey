import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';
import { Survey } from '../../survey/entity/survey.entity';
import { SurveyResultResponse } from '../dto/survey-result.request';

@Entity()
export class SurveyResult extends BaseEntity {
  @ManyToOne(() => Survey)
  survey: Survey;

  @Column({ nullable: false })
  userIp: string;

  @Column({ nullable: false })
  totalScore: number;

  static from(request: SurveyResultResponse, survey: Survey) {
    const surveyResult = new SurveyResult();
    surveyResult.survey = survey;
    surveyResult.userIp = request.userIp;
    surveyResult.totalScore = request.totalScore;
    return surveyResult;
  }
}
