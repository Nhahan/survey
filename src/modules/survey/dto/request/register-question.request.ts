import { IsNotEmpty } from 'class-validator';

export class RegisterQuestionRequest {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  surveyId: number;
}
