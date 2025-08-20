import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/entidades/movimiento.entity/movimiento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
    constructor(@InjectRepository(Movimiento) private repo : Repository<Movimiento>) {}
}
