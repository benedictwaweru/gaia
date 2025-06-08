import { Module } from '@nestjs/common';

import { ImagePreviewGeneratorController } from '@/preview/image/image-preview-generator.controller';
import { ImagePreviewGeneratorService } from '@/preview/image/image-preview-generator.service';

@Module({
  controllers: [ImagePreviewGeneratorController],
  providers: [ImagePreviewGeneratorService],
})
export class ImagePreviewGeneratorModule {}
