import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class Inventario {
    @IsString()
    @IsNotEmpty()
    nombreIdentificador : string

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
