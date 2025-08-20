import { Module } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { InventariosController } from './inventarios.controller';
import { Inventario } from 'src/entidades/inventario.entity/inventario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Inventario, TypeOrmModule.forFeature([Inventario])], 
  providers: [InventariosService],
  controllers: [InventariosController]
})
export class InventariosModule {}
