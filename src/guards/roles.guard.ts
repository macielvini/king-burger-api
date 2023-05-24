import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Reflector } from '@nestjs/core';
import { User } from '@prisma/client';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private readonly prisma: PrismaService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const role = this.reflector.get('role', context.getClass());
    const user: User = request.user;

    if (!role) return true;
    if (!user?.role) throw new UnauthorizedException('no role');
    if (user.role !== role) throw new UnauthorizedException('role error');

    return true;
  }
}
