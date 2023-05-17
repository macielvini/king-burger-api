import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
