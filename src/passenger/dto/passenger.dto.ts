import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PassengerDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
