import { Producto } from './producto.entity';

describe('Producto', () => {
  it('should be defined', () => {
    expect(new Producto()).toBeDefined();
  });
});
