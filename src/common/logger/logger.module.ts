import { ConfigService } from '@nestjs/config';
import { Logging } from './logging.decorator';
import { Global, Module } from '@nestjs/common';
import pino from 'pino';
import pinoPretty from 'pino-pretty';

@Global()
export class logger {
  private static pino: pino.Logger;

  constructor(private readonly configService: ConfigService) {
    logger.pino = pino(
      {
        level: configService.get('env') === 'live' ? 'info' : 'trace',
      },
      pinoPretty({
        colorize: true,
        translateTime: true,
        ignore: 'pid,hostname',
        messageFormat: '{msg}',
      }),
    );
  }

  @Logging()
  static error(message: string, context?: any, stack?: any) {
    this.pino.error({ message, context, stack });
  }

  @Logging()
  static log(message: string, context?: any) {
    this.pino.info({ message, context });
  }

  @Logging()
  static warn(message: string, context?: any) {
    this.pino.warn({ message, context });
  }

  static debug(message: string, context?: any) {
    this.pino.debug({ message, context });
  }

  static trace(message: string, context?: any) {
    this.pino.trace({ message, context });
  }
}

@Module({})
export class LoggerModule {
  static forRoot() {
    return logger;
  }
}
