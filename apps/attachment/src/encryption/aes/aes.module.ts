import { Module } from '@nestjs/common';
import { AesController } from './aes.controller';
import { AesService } from './aes.service';

@Module({
  controllers: [AesController],
  providers: [AesService],
})
export class AesModule {}
