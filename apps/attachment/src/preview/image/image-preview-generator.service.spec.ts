import { Test, TestingModule } from '@nestjs/testing';
import { ImagePreviewGeneratorService } from './image-preview-generator.service';

describe('ImagePreviewGeneratorService', () => {
  let service: ImagePreviewGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagePreviewGeneratorService],
    }).compile();

    service = module.get<ImagePreviewGeneratorService>(
      ImagePreviewGeneratorService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
