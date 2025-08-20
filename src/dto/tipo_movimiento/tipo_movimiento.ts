import { IsNotEmpty, IsString } from "class-validator"

export class TipoMovimiento {
    @IsString()
    @IsNotEmpty()
    nombre : string
    
    @IsString()
    @IsNotEmpty()
    descripcion : string
}
