import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LoggerModule} from './common/logger/logger.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ormConfig } from './configs/orm.config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot(), TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ormConfig(configService),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
