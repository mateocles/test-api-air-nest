import { Body, Controller, Post } from '@nestjs/common';

import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }
}
