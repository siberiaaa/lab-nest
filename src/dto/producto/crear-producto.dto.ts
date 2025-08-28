import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CrearProductoDto {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  @IsNotEmpty()
  disponible: boolean;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  categoriaNombre: string;
}