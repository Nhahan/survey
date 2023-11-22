import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../common/orm/typeorm-ex.module';
import { DynamicModule } from '@nestjs/common';
import { Survey } from '../modules/survey/entity/survey.entity';
import { Question } from '../modules/survey/entity/question.entity';
import { SurveyResult } from '../modules/survey-result/entity/survey-result.entity';
import { Answer } from '../modules/survey/entity/answer.entity';
import { SurveyRepository } from '../modules/survey/repository/survey.repository';
import { QuestionRepository } from '../modules/survey/repository/question.repository';
import { OptionRepository } from '../modules/survey/repository/option.repository';
import { Option } from '../modules/survey/entity/option.entity';
import { AnswerRepository } from '../modules/survey/repository/answer.repository';

export default registerAs('typeorm', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: true,
  logging: false,
  retryAttempts: 3,
}));

export const TypeOrmModules: DynamicModule[] = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => configService.get('typeorm'),
    inject: [ConfigService],
  }),
  TypeOrmModule.forFeature([Survey, Question, Option, Answer, SurveyResult]),
  TypeOrmExModule.forCustomRepository([SurveyRepository, QuestionRepository, OptionRepository, AnswerRepository]),
];
