import { IPassenger } from './passenger.interface';

export interface IFlight extends Document {
  pilot: string;
  airplane: string;
  destination: string;
  flightDate: Date;
  passengers: IPassenger[];
}
