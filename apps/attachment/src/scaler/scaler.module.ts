import { Module } from '@nestjs/common';
import { ScalerService } from './scaler.service';
import { ScalerController } from './scaler.controller';

@Module({
  providers: [ScalerService],
  controllers: [ScalerController],
})
export class ScalerModule {}
