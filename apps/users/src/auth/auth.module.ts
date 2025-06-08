import { Module } from '@nestjs/common';

import { PasswordModule } from '@/auth/password/password.module';
import { OtpModule } from '@/auth/otp/otp.module';

@Module({
  imports: [PasswordModule, OtpModule],
})
export class AuthModule {}
