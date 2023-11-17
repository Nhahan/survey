import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { logger } from '../common/logger/logger.module';

const DB = Symbol('DATA_SOURCE');

export const databaseProviders = [
  {
    provide: DB,
    useFactory: async (configService: ConfigService) => {
      const type = 'postgres';
      const dataSource = new DataSource({
        type,
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      logger.debug(`DB: ${type}`);

      return dataSource.initialize();
    },
  },
];
