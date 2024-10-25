import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController handles incoming requests and responses for the application.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Handles GET requests to the root endpoint.
   * @returns {string} A greeting message provided by the AppService.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
