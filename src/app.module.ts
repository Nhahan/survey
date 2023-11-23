import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from './common/logger/logger.module';
import appConfig from './configs/app.config';
import typeOrmConfig from './configs/typeorm.config';
import { SurveyModule } from './modules/survey/survey.module';
import { SurveyResultModule } from './modules/survey-result/survey-result.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [typeOrmConfig, appConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => configService.get('typeorm'),
      inject: [ConfigService],
    }),
    LoggerModule.forRoot(),
    SurveyModule,
    SurveyResultModule,
  ],
  providers: [],
})
export class AppModule {}
