import { Test, TestingModule } from '@nestjs/testing';
import { DocumentPreviewGeneratorService } from './document-preview-generator.service';

describe('DocumentPreviewGeneratorService', () => {
  let service: DocumentPreviewGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentPreviewGeneratorService],
    }).compile();

    service = module.get<DocumentPreviewGeneratorService>(
      DocumentPreviewGeneratorService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
