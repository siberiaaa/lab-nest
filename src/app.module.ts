import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: 5432,
        username: configService.get<string>('DB_USERNAME'), // Lee la variable de entorno
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ProductosModule, UsuariosModule, CategoriasModule, RolesModule, InventariosModule, MovimientosModule, TipoMovimientosModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
