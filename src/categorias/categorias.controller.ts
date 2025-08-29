import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from 'src/dto/categoria/categoria';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Categorías')
@Controller('categorias')
export class CategoriasController {
    constructor(private readonly service : CategoriasService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todas las categorías' })
    async Listar() {
        return await this.service.listar()
    }
    
    @Get('/:nombre')
    @ApiOperation({ summary: 'Consulta una categoría por su nombre' })
    async Buscar(@Param('nombre') nombre : string) {
        return await this.service.buscar(nombre)
    }
    
    @Post()
    @ApiOperation({ summary: 'Crea una categoría' })
    async Crear(@Body() cuerpo : Categoria) {
        return await this.service.crear(cuerpo)
    }
    
    @Put('/:nombre')
    @ApiOperation({ summary: 'Modifica una categoría obtenida por su nombre' })
    async Modificar(@Param('nombre') nombre : string, @Body() cuerpo : Categoria) {
        return await this.service.modificar(nombre, cuerpo)
    }
    
    @Delete('/:nombre') 
    @ApiOperation({ summary: 'Elimina una categoría obtenida por su nombre' })
    async Eliminar(@Param('nombre') nombre : string) {
        return await this.service.eliminar(nombre)
    }
}
