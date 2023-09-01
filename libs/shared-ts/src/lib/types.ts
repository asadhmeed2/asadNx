type baseEntity = {
  _id?: string;
};

export type UserInfo = baseEntity & {
  name: string;
  title: string;
  experience: number;
  linkedinUrl: string;
};

export type UserExperience = baseEntity & {
  title: string;
  subTitle: string;
  description: string;
  technolgies: string[];
};

export type CreateUserExperience = UserExperience;
export type UpdateUserExperience = Partial<CreateUserExperience>;

export type UserProject = baseEntity & {
  id: string;
  title: string;
  description: string;
  framwork: string;
  moreTecnologes: string;
  websiteUrl: string;
};
