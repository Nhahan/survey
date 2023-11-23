import { Module } from '@nestjs/common';
import { SurveyResultService } from './service/survey-result.service';
import { SurveyResultController } from './presentation/survey-result.controller';
import { SurveyModule } from '../survey/survey.module';
import { SurveyService } from '../survey/service/survey.service';
import { QuestionService } from '../survey/service/question.service';
import { OptionService } from '../survey/service/option.service';
import { AnswerService } from '../survey/service/answer.service';
import { SurveyResultRepository } from './repository/survey-result.repository';
import { TypeOrmExModule } from '../../common/orm/typeorm-ex.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResult } from './entity/survey-result.entity';
import { SurveyResultFacade } from './facade/survey-result.facade';
import { Survey } from '../survey/entity/survey.entity';
import { Question } from '../survey/entity/question.entity';
import { Option } from '../survey/entity/option.entity';
import { Answer } from '../survey/entity/answer.entity';
import { SurveyRepository } from '../survey/repository/survey.repository';
import { QuestionRepository } from '../survey/repository/question.repository';
import { OptionRepository } from '../survey/repository/option.repository';
import { AnswerRepository } from '../survey/repository/answer.repository';

@Module({
  imports: [
    SurveyModule,
    TypeOrmModule.forFeature([SurveyResult, Survey, Question, Option, Answer]),
    TypeOrmExModule.forCustomRepository([
      SurveyResultRepository,
      SurveyRepository,
      QuestionRepository,
      OptionRepository,
      AnswerRepository,
    ]),
  ],
  controllers: [SurveyResultController],
  providers: [SurveyResultFacade, SurveyResultService, SurveyService, QuestionService, OptionService, AnswerService],
})
export class SurveyResultModule {}
