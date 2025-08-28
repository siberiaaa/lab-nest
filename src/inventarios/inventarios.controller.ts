import { Controller, Get, Param } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventarioService: InventariosService) {}

  @Get('stock/:productoId')
  consultarStock(@Param('productoId') productoId: number) {
    return this.inventarioService.consultarStock(productoId);
  }
}