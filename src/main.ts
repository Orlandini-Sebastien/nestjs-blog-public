import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

/**
 * Main function to bootstrap the NestJS application.
 * Sets up global configurations, pipes, and Swagger for API documentation.
 */
async function bootstrap() {
  dotenv.config(); // Loads environment variables from a .env file

  // Create the NestJS application using the AppModule as the root module
  const app = await NestFactory.create(AppModule);

  /**
   * Configures global pipes for validation.
   * @ValidationPipe ensures incoming request objects are validated and cleaned
   * by whitelisting valid properties and forbidding unknown properties.
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /**
   * Swagger configuration for the API documentation.
   * Sets up metadata including the API title, description, terms of service, and license.
   * The documentation is accessible at the /api endpoint.
   */
  const config = new DocumentBuilder()
    .setTitle('NestJs - Blog app API') // API title for Swagger
    .setDescription('Use the base API URL as http://localhost:3000') // API description
    .setTermsOfService('http://localhost:3000/terms-of-service') // Terms of Service URL
    .setLicense(
      'MIT Licence',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    ) // License details for the API
    .addServer('http://localhost:3000') // Default server URL for Swagger
    .setVersion('1.0') // API version
    .build();

  // Create Swagger document based on config and set up at /api endpoint
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the application, listening on the specified port or default to 3000
  await app.listen(process.env.PORT ?? 3000);
}

// Call the bootstrap function to launch the application
bootstrap();
