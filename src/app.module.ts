import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { ParamsController } from './params/params.controller';
import { PayloadController } from './payload/payload.controller';
import { ClienteService } from './cliente/cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema';
import { MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Photo]),
    MongooseModule.forRoot('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [
    AppController,
    RutasController,
    ParamsController,
    PayloadController,
    MongoController,
  ],
  providers: [AppService, ClienteService, PhotoService, MongoService],
})
export class AppModule {}
