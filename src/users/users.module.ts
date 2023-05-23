import { Global, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EncryptionModule } from 'src/encryption/encryption.module';

@Global()
@Module({
  imports: [PrismaModule, EncryptionModule],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
