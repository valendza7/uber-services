import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderService {
  getRiderById(id: string) {
    return Promise.resolve({
      _id: id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com'
    });
  }
}
