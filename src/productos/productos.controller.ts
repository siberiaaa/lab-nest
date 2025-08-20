import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from 'src/dto/producto/crear-producto.dto';
import { ActualizarProductoDto } from 'src/dto/producto/actualizar-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() crearProductoDto: CrearProductoDto) {
    return this.productosService.crearProducto(crearProductoDto);
  }

  @Get()
  findAll(@Query('categoria') categoria?: string) {
    return this.productosService.findAll(categoria);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarProductoDto: ActualizarProductoDto) {
    return this.productosService.update(id, actualizarProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productosService.remove(id);
  }
}