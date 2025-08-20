import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from 'src/entidades/usuario.entity/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [Usuario, TypeOrmModule.forFeature([Usuario])], 
  providers: [UsuariosService],
  controllers: [UsuariosController]
})
export class UsuariosModule {}
