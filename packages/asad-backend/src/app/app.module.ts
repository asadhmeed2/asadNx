import { Module } from '@nestjs/common';
import { UserInfoModule } from '../userInfo/userInfo.module';

import { MongooseModule } from '@nestjs/mongoose';

import config from '../config/keys';

@Module({
  imports: [UserInfoModule, MongooseModule.forRoot(config.mongoURL)],
})
export class AppModule {}
