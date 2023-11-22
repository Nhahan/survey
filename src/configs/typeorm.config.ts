import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from '../common/orm/typeorm-ex.module';
import { DynamicModule } from '@nestjs/common';
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
  TypeOrmModule.forFeature([]),
  TypeOrmExModule.forCustomRepository([]),
];
