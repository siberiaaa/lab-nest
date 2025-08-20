import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from 'src/entidades/producto.entity/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { CategoriasModule } from '../categorias/categorias.module';

@Module({
  imports: [TypeOrmModule.forFeature([Producto, Inventario]), CategoriasModule],
  providers: [ProductosService],
  controllers: [ProductosController],
  exports: [ProductosService],
})
export class ProductosModule {}
