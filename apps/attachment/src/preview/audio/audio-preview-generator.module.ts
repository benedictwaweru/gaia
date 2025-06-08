import { Module } from '@nestjs/common';

import { AudioPreviewGeneratorController } from '@/preview/audio/audio-preview-generator.controller';
import { AudioPreviewGeneratorService } from '@/preview/audio/audio-preview-generator.service';

@Module({
  controllers: [AudioPreviewGeneratorController],
  providers: [AudioPreviewGeneratorService],
})
export class AudioPreviewGeneratorModule {}
