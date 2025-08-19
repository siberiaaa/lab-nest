import { Test, TestingModule } from '@nestjs/testing';
import { TipoMovimientosService } from './tipo_movimientos.service';

describe('TipoMovimientosService', () => {
  let service: TipoMovimientosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMovimientosService],
    }).compile();

    service = module.get<TipoMovimientosService>(TipoMovimientosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
