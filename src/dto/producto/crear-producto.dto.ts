import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CrearProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsBoolean()
  @IsNotEmpty()
  disponible: boolean;

  @IsString()
  @IsNotEmpty()
  categoriaNombre: string;
}