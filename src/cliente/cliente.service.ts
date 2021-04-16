import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
  getData(): string {
    return 'hola hola';
  }
}
