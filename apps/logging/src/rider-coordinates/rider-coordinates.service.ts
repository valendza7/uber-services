import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
    getAllCoordinates: any;
    constructor(
        @InjectModel(RiderCoordinate.name) 
        private readonly riderCoordinateModel: Model<RiderCoordinate>,
        @Inject('RIDER_SERVICE') private client: ClientProxy
    ) {} // Assume repository is injected

    async getRiderCoordinates(riderId: string) {
        const coordinates = await this.riderCoordinateModel.find({ riderId });
        const rider = await firstValueFrom(this.client.send({ cmd: 'getRiderById' }, { id: riderId }))

        return { coordinates, rider };
    }

    saveRiderCoordinates(createCoordinatesDTO: createCoordinatesDTO) {
        return this.riderCoordinateModel.create(createCoordinatesDTO);
    }
}

