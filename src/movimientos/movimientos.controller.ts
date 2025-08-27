import { Body, Controller, Param, Post } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { RegistrarMovimientoDto } from 'src/dto/movimiento/registrar-movimiento.dto';

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Post('movimiento/:productoId')
  registrarMovimiento(
    @Param('productoId') productoId: number,
    @Body() registrarMovimientoDto: RegistrarMovimientoDto,
  ) {
    return this.movimientosService.registrarMovimiento(
      productoId,
      registrarMovimientoDto,
    );
  }
}
