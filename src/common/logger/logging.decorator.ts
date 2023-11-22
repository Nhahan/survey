import { logger } from './logger.module';

export function Logging(): MethodDecorator {
  return function (target: logger, logLevel: LogLevel, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const message = args[0];
      const context = args[1];
      const stack = args[2];
      message && logAction(logLevel, message, context, stack);
      return originalMethod.apply(this, args);
    };
  };
}

function logAction(level: LogLevel, message: string, context: any, stack: any) {
  const fixedLevel = level === 'log' ? 'info' : level;
  const log = `[${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}] [${fixedLevel}] ${{
    message,
    ...(context && { context }),
    ...(stack && { stack }),
  }}`;

  // todo: log 저장 로직 추가
}

type LogLevel = 'error' | 'log' | 'warn' | 'debug' | 'trace';
