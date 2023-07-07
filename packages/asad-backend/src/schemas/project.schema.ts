import { EUserProjectFormNames } from '@asadnx/shared-ts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  title: string;

  @Prop()
  description: number;

  @Prop()
  framwork: string;

  @Prop()
  technologes: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
