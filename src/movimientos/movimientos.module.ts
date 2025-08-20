import { Module } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { MovimientosController } from './movimientos.controller';
import { Movimiento } from 'src/entidades/movimiento.entity/movimiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Movimiento, TypeOrmModule.forFeature([Movimiento])], 
  providers: [MovimientosService],
  controllers: [MovimientosController]
})
export class MovimientosModule {}
