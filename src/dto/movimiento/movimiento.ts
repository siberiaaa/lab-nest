import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Movimiento {
    @ApiProperty({ type: Number })
    @IsInt()
    @IsNotEmpty()
    cantidad : number

    @ApiProperty({ type: Number })
    @IsInt()
    @IsNotEmpty()
    inventarioId : number

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    tipoMovimientoNombre : string
}
