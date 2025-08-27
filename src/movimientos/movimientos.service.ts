import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistrarMovimientoDto } from 'src/dto/movimiento/registrar-movimiento.dto';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { Movimiento } from 'src/entidades/movimiento.entity/movimiento.entity';
import { TipoMovimiento } from 'src/entidades/tipo_movimiento.entity/tipo_movimiento.entity';
import { InventariosService } from 'src/inventarios/inventarios.service';
import { ProductosService } from 'src/productos/productos.service';
import { TipoMovimientosService } from 'src/tipo_movimientos/tipo_movimientos.service';
import { Repository } from 'typeorm';

@Injectable()
export class MovimientosService {
  constructor(
    @InjectRepository(Movimiento)
    private readonly movimientoRepository: Repository<Movimiento>,
    private readonly productosService: ProductosService,
    private readonly inventarioService: InventariosService,
    private readonly tipoMovimientoService: TipoMovimientosService,
  ) {}

  async registrarMovimiento(productoId: number, dto: RegistrarMovimientoDto) {
    const producto = await this.productosService.findOne(productoId);
    const inventario = producto.inventario;

    const tipoMovimiento = await this.tipoMovimientoService.buscar(dto.tipoMovimiento);

    if (!tipoMovimiento) throw new NotFoundException('Tipo de movimiento no encontrado');

    if (!inventario) {
      throw new NotFoundException(
        `Inventario para el producto ${productoId} no encontrado.`,
      );
    }

    if (tipoMovimiento.nombre === 'salida') {
      return this.registrarSalida(productoId, inventario, dto.cantidad, tipoMovimiento);
    } else if (tipoMovimiento.nombre === 'entrada') {
      return this.registrarEntrada(productoId, inventario, dto.cantidad, tipoMovimiento);
    } else {
      throw new BadRequestException(
        'Lógica para este tipo de movimiento no registrado.',
      );
    }
  }

  private async registrarEntrada(productoId: number, inventario: Inventario, cantidad: number, tipo_movimiento: TipoMovimiento) {
    const { stockMaximo } = await this.obtenerStockPorProducto(productoId);

    if (inventario.cantidadActual + cantidad > stockMaximo) {
      throw new BadRequestException(
        'Stock máximo alcanzado. Registrada con menor cantidad para realizar la operación.',
      );
    }

    inventario.cantidadActual += cantidad;

    const movimiento = this.movimientoRepository.create({
      cantidad,
      inventario,
      tipo_movimiento
    });

    await this.movimientoRepository.save(movimiento);
    return await this.inventarioService.modificar(inventario.nombreIdentificador, inventario);
  }

  private async registrarSalida(
    productoId: number,
    inventario: Inventario,
    cantidad: number,
    tipo_movimiento: TipoMovimiento
  ) {
    const { stockMinimo } = await this.obtenerStockPorProducto(productoId);

    if (inventario.cantidadActual - stockMinimo < cantidad) {
      throw new BadRequestException(
        'Stock insuficiente para realizar la operación.',
      );
    }

    inventario.cantidadActual -= cantidad;

    const movimiento = this.movimientoRepository.create({
      cantidad,
      inventario,
      tipo_movimiento
    });

    await this.movimientoRepository.save(movimiento);
    
    return await this.inventarioService.modificar(inventario.nombreIdentificador, inventario);
  }

  async obtenerStockPorProducto(productoId: number) {
    // obtener producto (y su categoria)
    const producto = await this.productosService.findOne(productoId);

    // stock minimo de la categoria
    return {
      productoNombre: producto.nombre,
      stockMinimo: producto.categoria.minimo,
      stockMaximo: producto.categoria.maximo,
    };
  }
}
