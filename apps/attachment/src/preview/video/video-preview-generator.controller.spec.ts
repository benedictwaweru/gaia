import { Test, TestingModule } from '@nestjs/testing';
import { VideoPreviewGeneratorController } from './video-preview-generator.controller';

describe('VideoPreviewGeneratorController', () => {
  let controller: VideoPreviewGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoPreviewGeneratorController],
    }).compile();

    controller = module.get<VideoPreviewGeneratorController>(
      VideoPreviewGeneratorController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
