import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasService } from 'src/categorias/categorias.service';
import { ActualizarProductoDto } from 'src/dto/producto/actualizar-producto.dto';
import { CrearProductoDto } from 'src/dto/producto/crear-producto.dto';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { Producto } from 'src/entidades/producto.entity/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>,
    private readonly categoriasService: CategoriasService,
  ) {}

  async crearProducto(dto: CrearProductoDto) {
    // lógica para buscar categoria por nombre
    //find one categoria
    // const categoria = await this.categoriasService.findOne(dto.categoriaNombre);
    // si no está 
    // if (!categoria) throw new NotFoundException('Categoría no encontrada');

    const nuevoInventario = this.inventarioRepository.create({
      nombreIdentificador: `inventario-${dto.nombre}`,
      cantidadActual: 0,
    });

    const inventarioGuardado = await this.inventarioRepository.save(nuevoInventario);
    const categoria = await this.categoriasService.buscar(dto.categoriaNombre)
    if (!categoria) throw new NotFoundException('Categoría no encontrada');
    const nuevoProducto = this.productoRepository.create({
      ...dto,
      // categoria - se supone que la que encontramos, cuando ya esté
      // Ya lo está :3
      // Pero si no te funciona borra toda tu base datos y vuélvela a hacer
      inventario: inventarioGuardado,
      categoria: categoria
    });

    return this.productoRepository.save(nuevoProducto);
  }

  findAll(categoria?: string) {
    if (categoria) {
      return this.productoRepository.find({
        where: { categoria: { nombre: categoria } },
        relations: ['categoria', 'inventario'],
      });
    }
    return this.productoRepository.find({ relations: ['categoria', 'inventario'] });
  }

  async findOne(id: number) {
    const producto = await this.productoRepository.findOne({
      where: { id },
      // relations: ['categoria', 'inventario'],
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  async update(id: number, dto: ActualizarProductoDto) {
    // así para no repetir lógica del find one ootra vez
    const producto = await this.findOne(id);

    // si categoriaNombre en el dto no es null, actualizar
    // cuando este logica disponible
    // if (dto.categoriaNombre)
    
    Object.assign(producto, dto);
    return this.productoRepository.save(producto);
  }

  async remove(id: number) {
    // así para no repetir lógica del find one ootra vez
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
    
    // que elimine tambien su inventario
    if (producto.inventario) {
        await this.inventarioRepository.remove(producto.inventario);
    }
    return { message: `Producto con ID ${id} eliminado` };
  }
}