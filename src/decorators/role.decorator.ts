import { SetMetadata } from '@nestjs/common';
import PrismaClient from '@prisma/client';

export const Role = (role: PrismaClient.Role) => SetMetadata('role', role);
