import { Test, TestingModule } from '@nestjs/testing';
import { PayloadController } from './payload.controller';

describe('PayloadController', () => {
  let controller: PayloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayloadController],
    }).compile();

    controller = module.get<PayloadController>(PayloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
