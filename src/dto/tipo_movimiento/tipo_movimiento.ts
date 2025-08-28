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
}
