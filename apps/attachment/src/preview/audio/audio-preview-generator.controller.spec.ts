import { Test, TestingModule } from '@nestjs/testing';
import { AudioPreviewGeneratorController } from './audio-preview-generator.controller';

describe('AudioPreviewGeneratorController', () => {
  let controller: AudioPreviewGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AudioPreviewGeneratorController],
    }).compile();

    controller = module.get<AudioPreviewGeneratorController>(
      AudioPreviewGeneratorController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
