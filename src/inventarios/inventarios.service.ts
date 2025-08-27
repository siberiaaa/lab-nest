import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { Inventario as InventarioDto } from 'src/dto/inventario/inventario';


import { ProductosService } from 'src/productos/productos.service';
import { Repository } from 'typeorm';

@Injectable()
export class InventariosService {
  constructor(
    private readonly productosService: ProductosService,
    @InjectRepository(Inventario) private repo : Repository<Inventario>
  ) {}

  async consultarStock(productoId: number) {
    const producto = await this.productosService.findOne(productoId);
    if (!producto.inventario) {
      // creo que es relativamente imposible que pase que un producto no tenga inventario
      throw new NotFoundException(`El producto ${productoId} no tiene un inventario asociado.`);
    }
    return { stock: producto.inventario.cantidadActual };
  }

  async modificar(nombreIdentificador : string, inventarioDto : InventarioDto) {
          const inventario = await this.repo.findOneBy({ nombreIdentificador: nombreIdentificador })
          if (!inventario) throw new BadRequestException(`No existe ningún inventario ${nombreIdentificador}`)
          return await this.repo.save({ ...inventario, ...inventarioDto })
      }



}