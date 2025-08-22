import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Usuario } from 'src/entidades/usuario.entity/usuario.entity';
import { Usuario as UsuarioDto } from 'src/dto/usuario/usuario';
import { Repository } from 'typeorm';
import { Rol } from 'src/entidades/rol.entity/rol.entity';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario) private repo : Repository<Usuario>, 
        private readonly servicoRoles : RolesService
    ) {}
    
    async listar() {
        return await this.repo.find();
    }

    async buscar(correo: string) {
        return await this.repo.findOneBy({ correo: correo });
    }

    async crear(usuario: UsuarioDto) {
        let verdad = await this.buscar(usuario.correo)
        if (verdad) throw new BadRequestException('Ya existe un usuario con tal correo')
        const sal = 11;
        const nueva_contraseña = await hash(usuario.contraseña, sal);
        usuario.contraseña = nueva_contraseña;
        const nuevo = new Usuario();
        Object.assign(nuevo, usuario)
        let rol = await this.servicoRoles.buscar(usuario.rolNombre)
        if (!rol) throw new BadRequestException('No existe ese rol')
        nuevo.rol = rol
        return await this.repo.save(nuevo);
    }
}
