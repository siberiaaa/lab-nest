import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class TipoMovimiento {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    nombre : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    descripcion : string

    @ApiProperty({ 
        type: String, 
        example: '+', 
        description: 'Este dato tiene que ser la operación aritmética que hará este tipo de movimiento' })
    @IsString()
    @IsNotEmpty()
    accion : string
}
