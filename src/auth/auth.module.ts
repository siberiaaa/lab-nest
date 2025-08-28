import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [AuthService, AuthGuard],
  controllers: [AuthController], 
  imports: [
    UsuariosModule, 
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true, 
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '10m' },
      }),
    }),
  ], 
  exports: [AuthGuard, JwtModule]
})
export class AuthModule {}
