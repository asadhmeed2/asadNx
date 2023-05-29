import { Module } from '@nestjs/common';
import { UserInfoModule } from '../userInfo/userInfo.module';



@Module({
  imports: [UserInfoModule],
  
})
export class AppModule {}
