import { Column, Entity, ManyToOne } from 'typeorm';
import { Survey } from './survey.entity';
import { BaseEntity } from '../../../common/orm/base.entity';
import { RegisterQuestionRequest } from '../dto/request/register-question.request';

@Entity()
export class Question extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => Survey)
  survey: Survey;

  static fromRegisterQuestionRequest(request: RegisterQuestionRequest, survey: Survey): Question {
    const question = new Question();
    question.content = request.content;
    question.survey = survey;
    return question;
  }
}
