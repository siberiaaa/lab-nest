import { IsDateString, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class Usuario {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    correo : string

    @IsString()
    @IsNotEmpty()
    nombre_usuario : string

    @IsString()
    @IsNotEmpty()
    nombres : string

    @IsString()
    @IsNotEmpty()
    apellidos : string

    @IsDateString()
    @IsNotEmpty()
    nacimiento : string

    @IsString()
    @IsNotEmpty()
    genero : string

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    contraseña : string

    @IsString()
    @IsNotEmpty()
    rolNombre : string
}
