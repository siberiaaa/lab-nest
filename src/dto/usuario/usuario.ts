import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class Usuario {
    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    correo : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    nombre_usuario : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    nombres : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    apellidos : string

    @ApiProperty({ type: String })
    @IsDateString()
    @IsNotEmpty()
    nacimiento : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    genero : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    // @IsStrongPassword()
    contraseña : string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    rolNombre : string
}
