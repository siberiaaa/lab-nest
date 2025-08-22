import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Usuario } from 'src/dto/usuario/usuario';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly servicoUsuario: UsuariosService,
        private servicioJwt: JwtService
    ) {}

    async iniciarSesion(correo: string, contraseña: string) {
        const usuario = await this.servicoUsuario.buscar(correo);
        if (!usuario) throw new BadRequestException('No existe un usuario con ese nombre');
        const verdad = await compare(contraseña, usuario.contraseña);
        if (verdad) {
            const info = {
                correo: correo,
                tipo: usuario.rol.nombre,
            };
        return { token: await this.servicioJwt.signAsync(info) };
        }
        throw new UnauthorizedException('La contraseña es incorrecta');
    }

    async registrarUsuario(cuerpo: Usuario) {
        return await this.servicoUsuario.crear(cuerpo);
    }
}
