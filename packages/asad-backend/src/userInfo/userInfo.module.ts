import { Module } from '@nestjs/common';
import { UserInfoController } from './userInfo.controller';

import { UserInfoService } from './userInfo.service';

@Module({
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
