import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

type TokenCuerpo = { correo: string; tipo: string }

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private servicioJwt: JwtService, 
        private configService : ConfigService
    ) {}

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest() as Request;
        if ((request.path.includes('auth')) 
            && !request.path.includes('usuarios')) return true
        const token = this.obtenerDelHeader(request);
        if (!token) {
            throw new UnauthorizedException('No tiene el token');
        }
        let payload : TokenCuerpo = {correo : '', tipo : ''}
        try {
            payload = await this.servicioJwt.verifyAsync(token, {
                secret: this.configService.get<string>('JWT_SECRET')
            });
        } catch {
            throw new UnauthorizedException('No tiene el token');
        }
        if (payload.tipo != 'admin' && request.method != 'GET') {
            throw new UnauthorizedException('No tiene permiso por no ser admin');
        }
        return true;
    }

    private obtenerDelHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
