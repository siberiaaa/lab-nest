import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoMovimientosService } from './tipo_movimientos.service';
import { TipoMovimiento } from 'src/dto/tipo_movimiento/tipo_movimiento';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Tipos de movimientos')
@Controller('tipo-movimientos')
export class TipoMovimientosController {
    constructor(private readonly service : TipoMovimientosService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos los tipos de movimientos' })
    async Listar() {
        return await this.service.listar()
    }
    
    @Get('/:nombre')
    @ApiOperation({ summary: 'Consulta un tipo de movimiento por su nombre' })
    async Buscar(@Param('nombre') nombre : string) {
        return await this.service.buscar(nombre)
    }
    
    @Post()
    @ApiOperation({ summary: 'Crea un tipo de movimiento' })
    async Crear(@Body() cuerpo : TipoMovimiento) {
        return await this.service.crear(cuerpo)
    }
    
    @Put('/:nombre')
    @ApiOperation({ summary: 'Modifica un tipo de movimiento obtenido por su nombre' })
    async Modificar(@Param('nombre') nombre : string, @Body() cuerpo : TipoMovimiento) {
        return await this.service.modificar(nombre, cuerpo)
    }
    
    @Delete('/:nombre') 
    @ApiOperation({ summary: 'Elimina un tipo de movimiento obtenido por su nombre' })
    async Eliminar(@Param('nombre') nombre : string) {
        return await this.service.eliminar(nombre)
    }
}
