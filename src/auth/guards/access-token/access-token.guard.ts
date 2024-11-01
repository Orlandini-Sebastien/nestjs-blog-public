import {
  CanActivate, // Interface for implementing an authentication guard
  ExecutionContext, // Provides the request context
  Inject, // Decorator for dependency injection
  Injectable, // Decorator to declare an injectable service
  UnauthorizedException, // Exception for unauthorized access
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config'; // Type for custom configuration
import { JwtService } from '@nestjs/jwt'; // Service to handle JWTs
import { Request } from 'express'; // Type for the Express Request object
import jwtConfig from 'src/auth/config/jwt.config'; // JWT configuration
import { REQUEST_USER_KEY } from 'src/auth/constants/auth.constants'; // Key to store user in request

@Injectable() // Marks the class as injectable within other parts of the application
export class AccessTokenGuard implements CanActivate {
  constructor(
    /**
     * Inject JwtService to handle token verification
     */
    private readonly jwtService: JwtService,
    /**
     * Inject specific JWT configuration
     */
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  // Main method to check if the request is allowed
  async canActivate(
    context: ExecutionContext, // HTTP request context
  ): Promise<boolean> {
    // Extract the HTTP request from the context
    const request = context.switchToHttp().getRequest();

    // Extract the JWT token from the Authorization header
    const token = this.extractRequestFromHeader(request);

    // Check if the token exists
    if (!token) {
      // If the token is missing, throw an Unauthorized exception
      throw new UnauthorizedException();
    }

    try {
      // Verify the token using JwtService and configuration
      const payload = await this.jwtService.verifyAsync(
        token,
        this.jwtConfiguration,
      );
      // If the token is valid, store the user payload in the request
      request[REQUEST_USER_KEY] = payload;
    } catch (error) {
      // If verification fails, throw an Unauthorized exception
      throw new UnauthorizedException();
    }

    // If the token is valid, allow access by returning true
    return true;
  }

  // Method to extract the token from the Authorization header of the request
  private extractRequestFromHeader(request: Request): string | undefined {
    // Split the Authorization header, e.g., "Bearer <token>"
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    // Return the token or undefined if it doesn't exist
    return token;
  }
}
