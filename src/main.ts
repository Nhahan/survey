import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { logger } from './common/logger/logger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('port' as any);
  await app.listen(port);

  logger.log(`Application is running on port: ${port}`);
}
bootstrap();
