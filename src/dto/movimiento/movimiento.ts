import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Movimiento {
    @IsInt()
    @IsNotEmpty()
    cantidad : number

    @IsInt()
    @IsNotEmpty()
    inventarioId : number

    @IsString()
    @IsNotEmpty()
    tipoMovimientoNombre : string
}
