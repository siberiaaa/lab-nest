import { Module } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { MovimientosController } from './movimientos.controller';

@Module({
  providers: [MovimientosService],
  controllers: [MovimientosController]
})
export class MovimientosModule {}
