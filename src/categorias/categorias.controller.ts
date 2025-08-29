import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from 'src/dto/categoria/categoria';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Categorías')
@Controller('categorias')
export class CategoriasController {
    constructor(private readonly service : CategoriasService) {}

    @Get()
    async Listar() {
        return await this.service.listar()
    }
    
    @Get('/:nombre')
    async Buscar(@Param('nombre') nombre : string) {
        return await this.service.buscar(nombre)
    }
    
    @Post()
    async Crear(@Body() cuerpo : Categoria) {
        return await this.service.crear(cuerpo)
    }
    
    @Put('/:nombre')
    async Modificar(@Param('nombre') nombre : string, @Body() cuerpo : Categoria) {
        return await this.service.modificar(nombre, cuerpo)
    }
    
    @Delete('/:nombre') 
    async Eliminar(@Param('nombre') nombre : string) {
        return await this.service.eliminar(nombre)
    }
}
