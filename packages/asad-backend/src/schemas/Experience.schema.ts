import { EUserExperienceFormNames } from '@asadnx/shared-ts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema()
export class Experience {
  @Prop()
  title: string;

  @Prop()
  subTitle: number;

  @Prop()
  description: string;

  @Prop()
  technolgies: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
