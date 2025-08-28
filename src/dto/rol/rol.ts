import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class Rol {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    nombre : string

    @ApiProperty({ type: String })
    @IsString()
    descripcion : string
}
