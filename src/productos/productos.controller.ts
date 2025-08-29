import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from 'src/dto/producto/crear-producto.dto';
import { ActualizarProductoDto } from 'src/dto/producto/actualizar-producto.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un producto' })
  create(@Body() crearProductoDto: CrearProductoDto) {
    return this.productosService.crearProducto(crearProductoDto);
  }

  @ApiQuery({
    name: 'categoria',
    required: false,
    type: String
  })
  @Get()
  @ApiOperation({ summary: 'Lista todos los productos y permite filtrarlos por categoría' })
  findAll(@Query('categoria') categoria?: string) {
    return this.productosService.findAll(categoria);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consulta un producto por su id' })
  findOne(@Param('id') id: number) {
    return this.productosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifica un producto obtenido por su id' })
  update(@Param('id') id: number, @Body() actualizarProductoDto: ActualizarProductoDto) {
    return this.productosService.update(id, actualizarProductoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un producto obtenido por su id' })
  remove(@Param('id') id: number) {
    return this.productosService.remove(id);
  }
}