import { Module } from '@nestjs/common';

import { AesModule } from '@/encryption/aes/aes.module';

@Module({
  imports: [AesModule],
})
export class EncryptionModule {}
