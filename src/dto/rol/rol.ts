import { IsNotEmpty, IsString } from "class-validator";

export class Rol {
    @IsString()
    @IsNotEmpty()
    nombre : string

    @IsString()
    descripcion : string
}
