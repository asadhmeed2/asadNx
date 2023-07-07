import { Module } from '@nestjs/common';
import { UserInfoController } from './userInfo.controller';

import { UserInfoService } from './userInfo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from '../schemas/Experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserInfoModule {}
