import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { logger } from '../logger/logger.module';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;
    const error = exception.getResponse()['error'];
    const stackLines = exception.stack.split('\n');
    stackLines.shift();
    const stack = stackLines.join('').trim();

    logger.error(exception.message, exception.getResponse(), stack);

    response.status(status).json({
      statusCode: status,
      message,
      error,
    });
  }
}
