import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { logger } from './common/logger/logger.module';
import { CustomExceptionFilter } from './common/error/error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new CustomExceptionFilter());

  const configService = app.get(ConfigService);
  const port = configService.get('port' as any);
  await app.listen(port);

  logger.log(`Application is running on port: ${port}`);
}
bootstrap();
