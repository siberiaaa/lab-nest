import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { RegistrarMovimientoDto } from 'src/dto/inventario/registrar-movimiento.dto';

@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventarioService: InventariosService) {}

  @Get('stock/:productoId')
  consultarStock(@Param('productoId') productoId: number) {
    return this.inventarioService.consultarStock(productoId);
  }

  @Post('movimiento/:productoId')
  registrarMovimiento(
    @Param('productoId') productoId: number,
    @Body() registrarMovimientoDto: RegistrarMovimientoDto,
  ) {
    return this.inventarioService.registrarMovimiento(productoId, registrarMovimientoDto);
  }
}