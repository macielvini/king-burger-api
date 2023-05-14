import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { BcryptService } from 'src/encryption/bcrypt.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly encryptService: BcryptService,
  ) {}

  async create(body: CreateUserDTO) {
    const encryptedPassword = this.encryptService.hash(body.password);

    await this.usersRepo.create({
      ...body,
      password: encryptedPassword,
    });

    return HttpStatus.CREATED;
  }
}
