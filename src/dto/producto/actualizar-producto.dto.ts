import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class ActualizarProductoDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  disponible?: boolean;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  categoriaNombre?: string;
}