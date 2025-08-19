import { Module } from '@nestjs/common';
import { TipoMovimientosService } from './tipo_movimientos.service';
import { TipoMovimientosController } from './tipo_movimientos.controller';

@Module({
  providers: [TipoMovimientosService],
  controllers: [TipoMovimientosController]
})
export class TipoMovimientosModule {}
