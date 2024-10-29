import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * AppController handles incoming requests and responses for the application.
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
