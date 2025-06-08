import { Module } from '@nestjs/common';

import { ImagePreviewGeneratorModule } from './image/image-preview-generator.module';
import { VideoPreviewGeneratorModule } from './video/video-preview-generator.module';
import { AudioPreviewGeneratorModule } from './audio/audio-preview-generator.module';
import { DocumentPreviewGeneratorModule } from './document/document-preview-generator.module';

@Module({
  imports: [
    ImagePreviewGeneratorModule,
    VideoPreviewGeneratorModule,
    AudioPreviewGeneratorModule,
    DocumentPreviewGeneratorModule,
  ],
})
export class PreviewGeneratorModule {}
