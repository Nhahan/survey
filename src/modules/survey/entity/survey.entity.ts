import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/orm/base.entity';
import { RegisterSurveyRequest } from '../dto/request/register-survey.request';

@Entity()
export class Survey extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  static fromRegisterSurveyRequest(request: RegisterSurveyRequest): Survey {
    const survey = new Survey();
    survey.title = request.title;
    survey.description = request.description;
    return survey;
  }
}
