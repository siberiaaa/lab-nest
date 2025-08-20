import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { Categoria } from 'src/entidades/categoria.entity/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Categoria, TypeOrmModule.forFeature([Categoria])], 
  providers: [CategoriasService],
  controllers: [CategoriasController]
})
export class CategoriasModule {}
