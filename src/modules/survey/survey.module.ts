import { Module } from '@nestjs/common';
import { SurveyService } from './service/survey.service';
import { QuestionService } from './service/question.service';
import { OptionService } from './service/option.service';
import { AnswerService } from './service/answer.service';
import { SurveyController } from './presentation/survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../../common/orm/typeorm-ex.module';
import { Option } from './entity/option.entity';
import { Answer } from './entity/answer.entity';
import { Survey } from './entity/survey.entity';
import { SurveyRepository } from './repository/survey.repository';
import { OptionRepository } from './repository/option.repository';
import { AnswerRepository } from './repository/answer.repository';
import { SurveyFacade } from './facade/survey.facade';
import { Question } from './entity/question.entity';
import { QuestionRepository } from './repository/question.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Survey, Question, Option, Answer]),
    TypeOrmExModule.forCustomRepository([SurveyRepository, QuestionRepository, OptionRepository, AnswerRepository]),
  ],
  controllers: [SurveyController],
  providers: [SurveyFacade, SurveyService, QuestionService, OptionService, AnswerService],
  exports: [SurveyService, QuestionService, OptionService, AnswerService],
})
export class SurveyModule {}
