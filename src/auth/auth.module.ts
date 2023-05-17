import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { EncryptionModule } from 'src/encryption/encryption.module';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.JWT_SECRET }),
    UsersModule,
    EncryptionModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
