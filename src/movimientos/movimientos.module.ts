import { Module } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { MovimientosController } from './movimientos.controller';
import { Movimiento } from 'src/entidades/movimiento.entity/movimiento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from 'src/productos/productos.module';
import { InventariosModule } from 'src/inventarios/inventarios.module';
import { TipoMovimientosModule } from 'src/tipo_movimientos/tipo_movimientos.module';

@Module({
  imports: [Movimiento, TypeOrmModule.forFeature([Movimiento]),
  ProductosModule, InventariosModule, TipoMovimientosModule], 
  providers: [MovimientosService],
  controllers: [MovimientosController]
})
export class MovimientosModule {}
