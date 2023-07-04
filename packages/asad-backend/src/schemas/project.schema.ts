import { EUserProjectFormNames } from '@asadnx/shared-ts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  [EUserProjectFormNames.TITLE]: string;

  @Prop()
  [EUserProjectFormNames.DESCRIPTION]: number;

  @Prop()
  [EUserProjectFormNames.FRAMWORK]: string;

  @Prop()
  [EUserProjectFormNames.TECHNOLGIES]: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
