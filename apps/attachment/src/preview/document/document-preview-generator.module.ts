import { Module } from '@nestjs/common';

import { DocumentPreviewGeneratorController } from '@/preview/document/document-preview-generator.controller';
import { DocumentPreviewGeneratorService } from '@/preview/document/document-preview-generator.service';

@Module({
  controllers: [DocumentPreviewGeneratorController],
  providers: [DocumentPreviewGeneratorService],
})
export class DocumentPreviewGeneratorModule {}
