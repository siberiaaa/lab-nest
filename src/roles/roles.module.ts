import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from 'src/entidades/rol.entity/rol.entity';

@Module({
  imports: [Rol, TypeOrmModule.forFeature([Rol])], 
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
