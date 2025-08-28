import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class Producto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombre : string

    @ApiProperty()
    @IsBoolean()
    disponible : boolean

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    categoriaNombre : string

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    inventarioId : number
}
