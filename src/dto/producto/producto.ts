import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class Producto {
    @IsString()
    @IsNotEmpty()
    nombre : string

    @IsBoolean()
    disponible : boolean

    @IsString()
    @IsNotEmpty()
    categoriaNombre : string

    @IsInt()
    @IsNotEmpty()
    inventarioId : number
}
