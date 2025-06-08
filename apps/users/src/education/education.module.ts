import { Module } from '@nestjs/common';
import { EducationController } from '@/education/education.controller';
import { EducationService } from '@/education/education.service';

@Module({
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
