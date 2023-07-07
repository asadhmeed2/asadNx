import { EUserExperienceFormNames } from '@asadnx/shared-ts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema()
export class Experience {
  @Prop()
  [EUserExperienceFormNames.TITLE]: string;

  @Prop()
  [EUserExperienceFormNames.SUB_TITLE]: string;

  @Prop()
  [EUserExperienceFormNames.DESCRIPTION]: string;

  @Prop()
  [EUserExperienceFormNames.TECHNOLGIES]: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
