import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsNotEmpty, IsString } from 'class-validator';

export class RegistrarMovimientoDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  cantidad: number;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  // entrada o salida string creo
  tipoMovimiento: string; 
}