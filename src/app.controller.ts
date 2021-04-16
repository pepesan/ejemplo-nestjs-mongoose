import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // inyección de dependencias
  // Spring @Autowire
  // private appService: AppService;
  constructor(private readonly appService: AppService) {
    // this.appService = new AppService();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
