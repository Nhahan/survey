import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './common/logger/logger.module';
import appConfig from './configs/app.config';
import typeOrmConfig, { TypeOrmModules } from './configs/typeorm.config';
import { ComponentScan } from '@tiny-nestjs/auto-injectable';

@ComponentScan()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [typeOrmConfig, appConfig],
    }),
    LoggerModule.forRoot(),
    ...TypeOrmModules,
  ],
  providers: [],
})
export class AppModule {}
