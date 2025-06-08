import { Test, TestingModule } from '@nestjs/testing';
import { ImagePreviewGeneratorController } from './image-preview-generator.controller';

describe('ImagePreviewGeneratorController', () => {
  let controller: ImagePreviewGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagePreviewGeneratorController],
    }).compile();

    controller = module.get<ImagePreviewGeneratorController>(
      ImagePreviewGeneratorController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
