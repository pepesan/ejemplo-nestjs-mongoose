import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schema';
import { CreateCatDTO } from './cat';

@Injectable()
export class MongoService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDTO): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
    //return new this.catModel(createCatDto).save;
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
