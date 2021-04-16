import { Body, Controller, Get, Post } from '@nestjs/common';
import { MongoService } from './mongo.service';
import { CreateCatDTO } from './cat';

@Controller('mongo')
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}
  @Get()
  async findAll(): Promise<CreateCatDTO[]> {
    return this.mongoService.findAll();
  }
  @Post()
  async createCat(@Body() cat: CreateCatDTO): Promise<CreateCatDTO> {
    return this.mongoService.create(cat);
  }
}
