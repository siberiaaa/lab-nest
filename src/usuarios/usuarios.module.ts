import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from 'src/entidades/usuario.entity/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [Usuario, TypeOrmModule.forFeature([Usuario]), RolesModule], 
  providers: [UsuariosService],
  controllers: [UsuariosController], 
  exports: [UsuariosService]
})
export class UsuariosModule {}
