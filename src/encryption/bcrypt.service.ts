import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Encrypt } from './encrypt.interface';

@Injectable()
export class BcryptService implements Encrypt {
  private readonly SALT_ROUNDS = 12;

  hash(password: string): string {
    return bcrypt.hashSync(password, this.SALT_ROUNDS);
  }
  compare(password: string, encryptedPassword: string): boolean {
    return bcrypt.compareSync(password, encryptedPassword);
  }
}
