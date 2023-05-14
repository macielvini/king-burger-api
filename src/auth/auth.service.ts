import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { BcryptService } from 'src/encryption/bcrypt.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly encryptionService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  private async createToken(user: User) {
    const token = this.jwtService.sign(
      {
        email: user.email,
      },
      { expiresIn: '30 days', subject: user.id },
    );

    return { accessToken: token };
  }

  async checkToken(token: string) {
    try {
      const data = await this.jwtService.verify(token);
      return data;
    } catch (e) {
      throw new UnauthorizedException('invalid token');
    }
  }

  async register(body) {
    return await this.usersService.create(body);
  }

  async login(body: LoginDTO) {
    const user = await this.usersService.findByEmail(body.email);

    if (!user) throw new UnauthorizedException();

    const validPassword = this.encryptionService.compare(
      body.password,
      user.password,
    );

    if (!validPassword) throw new UnauthorizedException();

    return this.createToken(user);
  }
}
