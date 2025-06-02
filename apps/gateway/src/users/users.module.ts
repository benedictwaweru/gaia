/***************************************************************************************
 * 
 **************************************************************************************/

/**
 * @file UsersModule
 * @description This module is responsible for communicating with the users service.
 */

import { Module } from '@nestjs/common';

import { UsersController } from '@/users/users.controller';

@Module({
  controllers: [UsersController],
  imports: [],
})
export class UsersModule {}
