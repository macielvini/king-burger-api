import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { User } from 'src/decorators/user.decorator';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDTO) {
    return this.authService.register(body);
  }

  @Post()
  login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@User() user) {
    delete user.password;
    return user;
  }
}
