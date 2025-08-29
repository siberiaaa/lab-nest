import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from 'src/entidades/rol.entity/rol.entity';
import { Rol as RolDto } from 'src/dto/rol/rol'
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Rol) private repo : Repository<Rol>) {}

    async buscar(nombre : string) {
        return await this.repo.findOneBy({ nombre : nombre })
    }

    async listar() {
        return await this.repo.find()
    }

    async crear(rol : RolDto) {
        const verdad = await this.repo.findOneBy({ nombre: rol.nombre })
        if (verdad) throw new BadRequestException('Ya existe un rol con tal nombre')
        return await this.repo.save(rol)
    }

    async modificar(nombre : string, rol : RolDto) {
        const verdad = await this.repo.findOneBy({ nombre: nombre })
        if (!verdad) throw new BadRequestException('No existe ningún rol con tal nombre')
        return await this.repo.save({ ...verdad, ...rol })
    }

    async eliminar(nombre : string) {
        try {
            const verdad = await this.repo.findOneBy({ nombre: nombre })
            if (!verdad) throw new BadRequestException('No existe ningún rol con tal nombre')
            return await this.repo.remove(verdad)
        } catch (error) {
            throw new BadRequestException('No se puede eliminar roles que ya son usados')
        }
    }
}
