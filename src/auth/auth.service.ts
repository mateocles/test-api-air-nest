import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userServices: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userServices.findByUsername(username);
    const isValidPassword = await this.userServices.checkPassword(
      password,
      user.password,
    );
    if (user && isValidPassword) return user;
    return null;
  }

  async signIn(user: any) {
    try {
      const payload = this.jwtService.sign({
        username: user.username,
        sub: user._id,
      });
      return { token: payload };
    } catch (error) {
      console.log(error);
    }
  }
  async signUp(userDTO: UserDTO) {
    return this.userServices.create(userDTO);
  }
}
