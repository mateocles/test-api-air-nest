import * as mongoose from 'mongoose';

export const FlightSchema = new mongoose.Schema(
  {
    pilot: { type: String, require: true },
    airplane: { type: String, require: true },
    destination: { type: String, require: true },
    flightDate: { type: Date, require: true },
    passengers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'passengers',
      },
    ],
  },
  { timestamps: true },
);

FlightSchema.index({ pilot: 1 }, { unique: true });
