import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from 'src/entidades/categoria.entity/categoria.entity';
import { Categoria as CategoriaDto } from "src/dto/categoria/categoria";
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
    constructor(@InjectRepository(Categoria) private repo : Repository<Categoria>) {}

    async listar() {
        return await this.repo.find()
    }

    async buscar(nombre : string) {
        return await this.repo.findOneBy({ nombre: nombre })
    }

    async crear(categoria : CategoriaDto) {
        const verdad = await this.repo.findOneBy({ nombre: categoria.nombre })
        if (verdad) throw new BadRequestException('Ya existe una categoría con tal nombre')
        return await this.repo.save(categoria)
    }

    async modificar(nombre : string, categoria : CategoriaDto) {
        const verdad = await this.repo.findOneBy({ nombre: nombre })
        if (!verdad) throw new BadRequestException('No existe una categoría con tal nombre')
        return await this.repo.save({ ...verdad, ...categoria })
    }

    async eliminar(nombre : string) {
        try {
            const verdad = await this.repo.findOneBy({ nombre: nombre })
            if (!verdad) throw new BadRequestException('No existe una categoría con tal nombre')
            return await this.repo.remove(verdad)
        } catch (error) {
            throw new BadRequestException('No se puede eliminar una categoría que ya este siendo usada')
        }
    }
}
