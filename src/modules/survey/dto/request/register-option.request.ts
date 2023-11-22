import { IsNotEmpty } from 'class-validator';
import { Question } from '../../entity/question.entity';

export class RegisterOptionRequest {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  score: number;
  @IsNotEmpty()
  questionId: number;
}
