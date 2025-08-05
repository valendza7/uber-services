import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// lat, long, rider

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinate>;

@Schema()
export class RiderCoordinate {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  long: number;

  @Prop({ required: true })
  riderId: string;
}

export const RiderCoordinatesSchemaFactory = SchemaFactory.createForClass(RiderCoordinate);