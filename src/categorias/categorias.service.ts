import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/entidades/categoria.entity/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
    constructor(@InjectRepository(Categoria) private repo : Repository<Categoria>) {}
}
