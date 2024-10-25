import { Injectable } from '@nestjs/common';

/**
 * AppService provides core application services, including a greeting message.
 */
@Injectable()
export class AppService {
  /**
   * Returns a greeting message.
   * @returns {string} A welcome message for the application.
   */
  getHello(): string {
    return 'Hello Nest!';
  }
}
