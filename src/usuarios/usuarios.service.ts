import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/entidades/usuario.entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuario) private repo : Repository<Usuario>) {}
}
