import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appCreate } from './app.create';

/**
 * Main function to bootstrap the NestJS application.
 * Sets up global configurations, pipes, and Swagger for API documentation.
 */
async function bootstrap() {
  // Create the NestJS application using the AppModule as the root module
  const app = await NestFactory.create(AppModule);

  //Add middleware
  appCreate(app);

  // Start the application, listening on the specified port or default to 3000
  await app.listen(process.env.PORT ?? 3000);
}

// Call the bootstrap function to launch the application
bootstrap();
