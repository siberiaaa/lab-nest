import { Controller, Get, Param } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventarioService: InventariosService) {}

  @Get('stock/:productoId')
  @ApiOperation({ summary: 'Consulta la cantidad de stock que hay de un producto en el inventario' })
  consultarStock(@Param('productoId') productoId: number) {
    return this.inventarioService.consultarStock(productoId);
  }
}