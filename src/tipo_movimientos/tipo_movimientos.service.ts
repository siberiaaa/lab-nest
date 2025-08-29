import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoMovimiento } from 'src/entidades/tipo_movimiento.entity/tipo_movimiento.entity';
import { TipoMovimiento as TipoMovimientoDto } from 'src/dto/tipo_movimiento/tipo_movimiento';
import { Repository } from 'typeorm';

@Injectable()
export class TipoMovimientosService {
    constructor(@InjectRepository(TipoMovimiento) private repo : Repository<TipoMovimiento>) {}

    async buscar(nombre : string) {
        return await this.repo.findOneBy({ nombre : nombre })
    }
    
    async listar() {
        return await this.repo.find()
    }
    
    async crear(tipo : TipoMovimientoDto) {
        const verdad = await this.repo.findOneBy({ nombre: tipo.nombre })
        if (verdad) throw new BadRequestException('Ya existe un tipo de movimiento con tal nombre')
        return await this.repo.save(tipo)
    }
    
    async modificar(nombre : string, tipo : TipoMovimientoDto) {
        const verdad = await this.repo.findOneBy({ nombre: nombre })
        if (!verdad) throw new BadRequestException('No existe ningún tipo de movimiento con tal nombre')
        return await this.repo.save({ ...verdad, ...tipo })
    }
    
    async eliminar(nombre : string) {
        try {
            const verdad = await this.repo.findOneBy({ nombre: nombre })
            if (!verdad) throw new BadRequestException('No existe ningún tipo de movimiento con tal nombre')
            return await this.repo.remove(verdad)
        } catch (error) {
            throw new BadRequestException('No se puede eliminar un tipo de movimiento que ya está siendo usado')
        }
    }
}
