import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
@ApiTags('Passengers')
@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  create(@Body() passengerDTO: PassengerDTO) {
    return this.passengerService.create(passengerDTO);
  }

  @Get()
  findAllPassenger() {
    return this.passengerService.findAllPassenger();
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.passengerService.findPassenger(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() passengerDTO: PassengerDTO) {
    return this.passengerService.updatePassenger(id, passengerDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.passengerService.delete(id);
  }
}
