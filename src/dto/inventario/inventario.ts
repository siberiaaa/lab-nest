import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Inventario {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    nombreIdentificador : string

    @ApiProperty({ type: Number })
    @IsInt()
    @IsNotEmpty()
    cantidadActual : number

    // @IsInt()
    // @IsNotEmpty()
    // maximo : number

    // @IsInt()
    // @IsNotEmpty()
    // minimo : number
}
