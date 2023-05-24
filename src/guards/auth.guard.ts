import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';

type JwtPayload = { email: string; sub: string };

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization) throw new BadRequestException('missing token');

    const token = authorization?.replace('Bearer ', '');

    try {
      const payload: JwtPayload = await this.authService.checkToken(token);
      const user = await this.usersService.findById(payload.sub);
      request.user = user;
    } catch (error) {
      return false;
    }

    return true;
  }
}
