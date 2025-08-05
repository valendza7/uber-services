import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private riderCoordinatesService: RiderCoordinatesService) {}
    @Get(":id")
    async getCoordinates(
        @Param()
        params: any
    ) {
        return this.riderCoordinatesService.getRiderCoordinates(params.id);
    }
    
    @Post()
    async saveRiderCoordinates(
        @Body()
        createCoordinateDTO: createCoordinatesDTO
    ) {
        return this.riderCoordinatesService.saveRiderCoordinates(createCoordinateDTO);
    }
}
