import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IpMiddleware } from './common/middleware/ip.middleware';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(IpMiddleware);

  const configService = app.get(ConfigService);
  const port = configService.get('port' as any);
  await app.listen(port);
}
bootstrap();
