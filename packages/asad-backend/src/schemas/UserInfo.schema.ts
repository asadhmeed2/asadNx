import { EUserInfoFormNames } from '@asadnx/shared-ts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserInfoDocument = HydratedDocument<UserInfo>;

@Schema()
export class UserInfo {
  @Prop()
  [EUserInfoFormNames.TITLE]: string;

  @Prop()
  [EUserInfoFormNames.EXP]: number;

  @Prop()
  [EUserInfoFormNames.NAME]: string;

  @Prop()
  [EUserInfoFormNames.LINKEDIN_URL]: string;
}

export const CatSchema = SchemaFactory.createForClass(UserInfo);
