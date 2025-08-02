import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getCoordinates() {
        return { message: 'Rider coordinates endpoint' };
    }
    
    @Post()
    saveRiderCoordinates(
        @Body()
        createCoordinatesDTO: createCoordinatesDTO
    ) {
        return { message: 'Rider coordinates saved', createCoordinatesDTO };
    }
}
