import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './common/logger/logger.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
