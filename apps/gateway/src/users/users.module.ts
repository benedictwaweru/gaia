/***********************************************************************************************
 * Copyright (c) 2025. All rights reserved.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 * This file is part of the Gaia project, which is released under the MIT License.
 ***********************************************************************************************/

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
