import { IsNotEmpty } from 'class-validator';

export class RegisterAnswerRequest {
  @IsNotEmpty()
  questionId: number;
  @IsNotEmpty()
  optionId: number;
}
