import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from 'src/entidades/rol.entity/rol.entity';

@Module({
  imports: [Rol, TypeOrmModule.forFeature([Rol])], 
  providers: [RolesService],
  controllers: [RolesController],
  exports: [RolesService]
})
export class RolesModule {}
