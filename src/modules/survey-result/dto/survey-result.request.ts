import { IsNotEmpty } from 'class-validator';

export class SurveyResultResponse {
  @IsNotEmpty()
  surveyId: number;
  @IsNotEmpty()
  userIp: string;
  @IsNotEmpty()
  totalScore: number;
}
