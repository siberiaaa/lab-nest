import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrarMovimientoDto } from 'src/dto/inventario/registrar-movimiento.dto';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { Movimiento } from 'src/entidades/movimiento.entity/movimiento.entity';
import { ProductosService } from 'src/productos/productos.service';
import { Repository } from 'typeorm';

@Injectable()
export class InventariosService {
  constructor(
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>,
    @InjectRepository(Movimiento)
    private readonly movimientoRepository: Repository<Movimiento>,
    private readonly productosService: ProductosService,
  ) {}

  async consultarStock(productoId: number) {
    const producto = await this.productosService.findOne(productoId);
    if (!producto.inventario) {
      // creo que es relativamente imposible que pase que un producto no tenga inventario
      throw new NotFoundException(`El producto ${productoId} no tiene un inventario asociado.`);
    }
    return { stock: producto.inventario.cantidadActual };
  }

  async registrarMovimiento(productoId: number, dto: RegistrarMovimientoDto) {
    const producto = await this.productosService.findOne(productoId);
    const inventario = producto.inventario;

    if (!inventario) {
      throw new NotFoundException(`Inventario para el producto ${productoId} no encontrado.`);
    }

    if (dto.tipoMovimiento === 'salida') {
      return this.registrarSalida(productoId, inventario, dto.cantidad);
    } else if (dto.tipoMovimiento === 'entrada') {
      return this.registrarEntrada(inventario, dto.cantidad);
    } else {
      throw new BadRequestException('Tipo de movimiento no válido. Usar "entrada" o "salida".');
    }
  }

  private async registrarEntrada(inventario: Inventario, cantidad: number) {
    inventario.cantidadActual += cantidad;

    const movimiento = this.movimientoRepository.create({
      cantidad,
      inventario,
      // tipo mov?
    });
    
    await this.movimientoRepository.save(movimiento);
    return this.inventarioRepository.save(inventario);
  }

  private async registrarSalida(productoId: number, inventario: Inventario, cantidad: number) {

 
    const { stockMinimo } = await this.obtenerStockMinimoPorProducto(productoId);

    if (inventario.cantidadActual - stockMinimo < cantidad) {
      throw new BadRequestException('Stock insuficiente para realizar la operación.');
    }

    inventario.cantidadActual -= cantidad;
    
    const movimiento = this.movimientoRepository.create({
      cantidad,
      inventario,
      // tipo mov?
    });

    await this.movimientoRepository.save(movimiento);
    return this.inventarioRepository.save(inventario);
  }

  async obtenerStockMinimoPorProducto(productoId: number) {
    // obtener producto (y su categoria)
    const producto = await this.productosService.findOne(productoId);

    // stock minimo de la categoria 
    return {
      productoNombre: producto.nombre,
      stockMinimo: producto.categoria.minimo,
    };
  }
}