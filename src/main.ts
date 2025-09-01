import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FiltroFilter } from './filtro/filtro.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder().addBearerAuth()
    .setTitle('Gestión de inventarios')
    .setDescription('API para la gestión de inventarios')
    .setVersion('1.0')
    // .addTag('')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalFilters(new FiltroFilter());
  await app.listen(process.env.PORT ?? 3000);
  console.log('http://localhost:3000/api');
  
}
void bootstrap();
