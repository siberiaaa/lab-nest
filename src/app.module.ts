import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { RolesModule } from './roles/roles.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { MovimientosModule } from './movimientos/movimientos.module';
import { TipoMovimientosModule } from './tipo_movimientos/tipo_movimientos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345', 
      // password: 'anapaula2006', 
      database: 'labnest',
      // database: 'laboratorioNestjs', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo en desarrollo
    }), ProductosModule, UsuariosModule, CategoriasModule, RolesModule, InventariosModule, MovimientosModule, TipoMovimientosModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
