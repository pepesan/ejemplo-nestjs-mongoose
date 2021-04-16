import { Controller, Get } from '@nestjs/common';

@Controller('rutas')
export class RutasController {
  @Get()
  getHello(): string {
    return 'Hola Ruta!';
  }
}
