import { Module } from '@nestjs/common';
import { UserInfoModule } from '../userInfo/userInfo.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserInfoModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
