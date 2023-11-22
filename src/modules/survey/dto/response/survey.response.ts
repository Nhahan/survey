import { Survey } from '../../entity/survey.entity';
import { Question } from '../../entity/question.entity';

export class SurveyResponse {
  survey: Survey;
  questions: Question[];

  static from(survey: Survey, questions: Question[]) {
    const response = new SurveyResponse();
    response.survey = survey;
    response.questions = questions;
    return response;
  }
}
