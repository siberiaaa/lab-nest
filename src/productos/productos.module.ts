import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from 'src/entidades/producto.entity/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Producto, TypeOrmModule.forFeature([Producto])], 
  providers: [ProductosService],
  controllers: [ProductosController]
})
export class ProductosModule {}
