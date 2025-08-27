import { Module } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { InventariosController } from './inventarios.controller';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from 'src/entidades/movimiento.entity/movimiento.entity';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inventario, Movimiento]),
    ProductosModule,
  ],
  controllers: [InventariosController],
  providers: [InventariosService],
  exports: [InventariosService],
})

export class InventariosModule {}
