import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoMovimientosService } from './tipo_movimientos.service';
import { TipoMovimiento } from 'src/dto/tipo_movimiento/tipo_movimiento';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Tipos de movimientos')
@Controller('tipo-movimientos')
export class TipoMovimientosController {
    constructor(private readonly service : TipoMovimientosService) {}

    @Get()
    async Listar() {
        return await this.service.listar()
    }
    
    @Get('/:nombre')
    async Buscar(@Param('nombre') nombre : string) {
        return await this.service.buscar(nombre)
    }
    
    @Post()
    async Crear(@Body() cuerpo : TipoMovimiento) {
        return await this.service.crear(cuerpo)
    }
    
    @Put('/:nombre')
    async Modificar(@Param('nombre') nombre : string, @Body() cuerpo : TipoMovimiento) {
        return await this.service.modificar(nombre, cuerpo)
    }
    
    @Delete('/:nombre') 
    async Eliminar(@Param('nombre') nombre : string) {
        return await this.service.eliminar(nombre)
    }
}
