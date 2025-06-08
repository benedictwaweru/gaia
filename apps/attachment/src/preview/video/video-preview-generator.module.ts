import { Module } from '@nestjs/common';

import { VideoPreviewGeneratorController } from '@/preview/video/video-preview-generator.controller';
import { VideoPreviewGeneratorService } from '@/preview/video/video-preview-generator.service';

@Module({
  controllers: [VideoPreviewGeneratorController],
  providers: [VideoPreviewGeneratorService],
})
export class VideoPreviewGeneratorModule {}
