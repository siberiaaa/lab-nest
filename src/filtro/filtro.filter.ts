import { ArgumentsHost, Catch, ExceptionFilter, HttpException, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class FiltroFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        estatus: status,
        momento: new Date().toISOString(),
        direccion: request.url,
        token: request.get('Authorization'), 
        mensaje: exception.message
      });
  }
}
