import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuario } from 'src/dto/usuario/usuario';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

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
    @ApiOperation({ summary: 'Inicia sesión del usuario' })
    async iniciar_sesion(@Body() cuerpo: CuerpoMensaje) {
        return await this.service.iniciarSesion(
            cuerpo.correo,
            cuerpo.contraseña,
        );
    }

    @Post('/registrar')
    @ApiOperation({ summary: 'Registra a los usuarios' })
    async registrar_usuario(@Body() cuerpo: Usuario) {
        return await this.service.registrarUsuario(cuerpo);
    }
}
