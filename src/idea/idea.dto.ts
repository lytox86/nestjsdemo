import { IsString } from 'class-validator';

import { UserRO } from '../user/user.dto';
import {ApiModelProperty} from '@nestjs/swagger';

export class IdeaDTO {
  @ApiModelProperty() @IsString()
  readonly idea: string;

  @ApiModelProperty() @IsString()
  readonly description: string;
}

export class IdeaRO {
  id: string;
  created: Date;
  updated: Date;
  idea: string;
  description: string;
  author: UserRO;
  upvotes?: number;
  downvotes?: number;
}
