import { Test, TestingModule } from '@nestjs/testing';
import { VideoPreviewGeneratorService } from './video-preview-generator.service';

describe('VideoPreviewGeneratorService', () => {
  let service: VideoPreviewGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoPreviewGeneratorService],
    }).compile();

    service = module.get<VideoPreviewGeneratorService>(
      VideoPreviewGeneratorService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
