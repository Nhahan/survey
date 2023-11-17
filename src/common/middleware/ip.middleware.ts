import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class IpMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req['userIp'] = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    next();
  }
}
