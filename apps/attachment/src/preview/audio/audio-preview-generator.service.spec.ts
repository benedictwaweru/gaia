import { Test, TestingModule } from '@nestjs/testing';
import { AudioPreviewGeneratorService } from './audio-preview-generator.service';

describe('AudioPreviewGeneratorService', () => {
  let service: AudioPreviewGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AudioPreviewGeneratorService],
    }).compile();

    service = module.get<AudioPreviewGeneratorService>(
      AudioPreviewGeneratorService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
