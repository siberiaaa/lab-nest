import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from 'src/dto/rol/rol';

@Controller('roles')
export class RolesController {
    constructor(private readonly service : RolesService) {}

    @Get()
    async Listar() {
        return await this.service.listar()
    }

    @Get('/:nombre')
    async Buscar(@Param('nombre') nombre : string) {
        return await this.service.buscar(nombre)
    }

    @Post()
    async Crear(@Body() cuerpo : Rol) {
        return await this.service.crear(cuerpo)
    }

    @Put('/:nombre')
    async Modificar(@Param('nombre') nombre : string, @Body() cuerpo : Rol) {
        return await this.service.modificar(nombre, cuerpo)
    }

    @Delete('/:nombre') 
    async Eliminar(@Param('nombre') nombre : string) {
        return await this.service.eliminar(nombre)
    }
}
