import { EUserInfoFormNames } from '@asadnx/shared-ts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserInfoDocument = HydratedDocument<UserInfo>;

@Schema()
export class UserInfo {
  @Prop()
  title: string;

  @Prop()
  experience: number;

  @Prop()
  name: string;

  @Prop()
  linkedinUrl: string;
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfo);
