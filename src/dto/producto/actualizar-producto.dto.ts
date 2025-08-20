import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class ActualizarProductoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsBoolean()
  @IsOptional()
  disponible?: boolean;

  @IsString()
  @IsOptional()
  categoriaNombre?: string;
}