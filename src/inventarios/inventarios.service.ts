import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventariosService {
    constructor(@InjectRepository(Inventario) private repo : Repository<Inventario>) {}
}
