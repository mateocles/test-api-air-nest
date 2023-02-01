import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags('Passengers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
