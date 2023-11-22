import { IsNotEmpty } from 'class-validator';

export class RegisterSurveyRequest {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
