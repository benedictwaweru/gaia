import { Test, TestingModule } from '@nestjs/testing';
import { DocumentPreviewGeneratorController } from './document-preview-generator.controller';

describe('DocumentPreviewGeneratorController', () => {
  let controller: DocumentPreviewGeneratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentPreviewGeneratorController],
    }).compile();

    controller = module.get<DocumentPreviewGeneratorController>(
      DocumentPreviewGeneratorController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
