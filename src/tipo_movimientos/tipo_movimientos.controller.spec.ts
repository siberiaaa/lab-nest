import { Test, TestingModule } from '@nestjs/testing';
import { TipoMovimientosController } from './tipo_movimientos.controller';

describe('TipoMovimientosController', () => {
  let controller: TipoMovimientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMovimientosController],
    }).compile();

    controller = module.get<TipoMovimientosController>(TipoMovimientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
