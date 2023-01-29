import { Module } from '@nestjs/common';
import { PassengerController } from './passenger.controller';
import { PassengerService } from './passenger.service';

@Module({
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
