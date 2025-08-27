import { Module } from '@nestjs/common';
import { TipoMovimientosService } from './tipo_movimientos.service';
import { TipoMovimientosController } from './tipo_movimientos.controller';
import { TipoMovimiento } from 'src/entidades/tipo_movimiento.entity/tipo_movimiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TipoMovimiento, TypeOrmModule.forFeature([TipoMovimiento])], 
  providers: [TipoMovimientosService],
  controllers: [TipoMovimientosController],
  exports: [TipoMovimientosService],
})
export class TipoMovimientosModule {}
