import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  //@Get(':id')
  @MessagePattern({ cmd: 'getRiderById' })
  async getRiderById(
    data: any
  ) {
    return await this.riderService.getRiderById(data.id);
  }
}
