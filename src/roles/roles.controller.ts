import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from 'src/dto/rol/rol';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('roles')
export class RolesController {
    constructor(private readonly service : RolesService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos los roles de usuarios' })
    async Listar() {
        return await this.service.listar()
    }

    @Get('/:nombre')
    @ApiOperation({ summary: 'Consulta un rol de usuario por su nombre' })
    async Buscar(@Param('nombre') nombre : string) {
        return await this.service.buscar(nombre)
    }

    @Post()
    @ApiOperation({ summary: 'Crea un rol de usuario' })
    async Crear(@Body() cuerpo : Rol) {
        return await this.service.crear(cuerpo)
    }

    @Put('/:nombre')
    @ApiOperation({ summary: 'Modifica un rol de usuario obtenido por su nombre' })
    async Modificar(@Param('nombre') nombre : string, @Body() cuerpo : Rol) {
        return await this.service.modificar(nombre, cuerpo)
    }

    @Delete('/:nombre') 
    @ApiOperation({ summary: 'Elimina un rol de usuario obtenido por su nombre' })
    async Eliminar(@Param('nombre') nombre : string) {
        return await this.service.eliminar(nombre)
    }
}
