import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { CreateObjectDto } from '../create-object-dto';
import { ListAllEntities } from '../list-all-entities';

@Controller('payload')
export class PayloadController {
  @Post()
  async create(@Body() createDto: CreateObjectDto) {
    // this.objects.push(createDto);
    return `This action adds a new object with name: ${createDto.name}`;
  }
  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all objects (limit: ${query.limit} items)`;
  }
}
