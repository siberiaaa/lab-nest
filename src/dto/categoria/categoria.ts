import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class Categoria {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    nombre : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    descripcion : string

    @ApiProperty({ type: Number })
    @IsInt()
    maximo : number

    @ApiProperty({ type: Number })
    @IsInt()
    minimo : number
}
