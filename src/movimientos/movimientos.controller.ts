import { Body, Controller, Param, Post } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { RegistrarMovimientoDto } from 'src/dto/movimiento/registrar-movimiento.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Post('movimiento/:productoId')
  @ApiOperation({ summary: 'Hace operaciones en los inventarios de los productos' })
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
