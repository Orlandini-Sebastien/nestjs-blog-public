import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Charge les variables d'environnement
  const app = await NestFactory.create(AppModule);

  //Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // ------------------

  //Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJs - Blog app API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense(
      'MIT Licence',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();
  // Instanciate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // ------------------

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
