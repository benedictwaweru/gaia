/***********************************************************************************************
 * Copyright (c) 2025. All rights reserved.
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 * This file is part of the Gaia project, which is released under the MIT License.
 ***********************************************************************************************/

import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ChatPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
