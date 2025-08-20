import { IsNumber, IsPositive, IsNotEmpty, IsString } from 'class-validator';

export class RegistrarMovimientoDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  cantidad: number;

  @IsString()
  @IsNotEmpty()
  // entrada o salida string creo
  tipoMovimiento: string; 
}