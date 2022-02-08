import { IsNotEmpty } from 'class-validator';

import { IdeaEntity } from '../idea/idea.entity';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserDTO {
  @ApiModelProperty() @IsNotEmpty()
  username: string;

  @ApiModelProperty() @IsNotEmpty()
  password: string;
}

export class UserRO {
  id: string;
  username: string;
  created: Date;
  token?: string;
  ideas?: IdeaEntity[];
  bookmarks?: IdeaEntity[];
}
