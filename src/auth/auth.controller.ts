import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuario } from 'src/dto/usuario/usuario';

type CuerpoMensaje = { 
    nombre_usuario: string; 
    contraseña: string 
}

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('/iniciar_sesion')
    async iniciar_sesion(@Body() cuerpo: CuerpoMensaje) {
        return await this.service.iniciarSesion(
            cuerpo.nombre_usuario,
            cuerpo.contraseña,
        );
    }

    @Post('/registrar')
    async registrar_usuario(@Body() cuerpo: Usuario) {
        return await this.service.registrarUsuario(cuerpo);
    }
}
