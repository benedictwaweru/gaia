import { Test, TestingModule } from '@nestjs/testing';
import { AesController } from './aes.controller';

describe('AesController', () => {
  let controller: AesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesController],
    }).compile();

    controller = module.get<AesController>(AesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
