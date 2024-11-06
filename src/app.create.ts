import { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { setupCors } from './cors.middleware';
import { globalValidationPipe } from './validation.pipe';

export function appCreate(app: INestApplication): void {
  /**
   * Configures global pipes for validation.
   * @ValidationPipe ensures incoming request objects are validated and cleaned
   * by whitelisting valid properties and forbidding unknown properties.
   */
  app.useGlobalPipes(globalValidationPipe);
  /**
   * Swagger configuration for the API documentation.
   * Sets up metadata including the API title, description, terms of service, and license.
   * The documentation is accessible at the /api endpoint.
   */
  const swaggerConfig = new DocumentBuilder()
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
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  /*
   * Setup AWS SDK used for uploadingg files to AWS S3
   * */
  const configService = app.get(ConfigService);
  config.update({
    credentials: {
      accessKeyId: configService.get<string>('appConfig.awsAccessKeyId'),
      secretAccessKey: configService.get<string>(
        'appConfig.awsSecretAccessKey',
      ),
    },
    region: configService.get<string>('appConfig.awsRegion'),
  });

  setupCors(app);
}
