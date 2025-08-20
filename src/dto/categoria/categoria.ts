import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class Categoria {
    @IsString()
    @IsNotEmpty()
    nombre : string

    @IsString()
    @IsNotEmpty()
    descripcion : string

    @IsInt()
    maximo : number

    @IsInt()
    minimo : number
}
