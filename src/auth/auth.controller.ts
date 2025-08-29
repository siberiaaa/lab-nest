import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuario } from 'src/dto/usuario/usuario';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class CuerpoMensaje { 
    @ApiProperty({ type: String })
    correo: string; 
    @ApiProperty({ type: String })
    contraseña: string 
}

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('/iniciar_sesion')
    async iniciar_sesion(@Body() cuerpo: CuerpoMensaje) {
        return await this.service.iniciarSesion(
            cuerpo.correo,
            cuerpo.contraseña,
        );
    }

    @Post('/registrar')
    async registrar_usuario(@Body() cuerpo: Usuario) {
        return await this.service.registrarUsuario(cuerpo);
    }
}
