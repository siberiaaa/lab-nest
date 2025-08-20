import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entidades/producto.entity/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
    constructor(@InjectRepository(Producto) private repo : Repository<Producto>) {}
}
