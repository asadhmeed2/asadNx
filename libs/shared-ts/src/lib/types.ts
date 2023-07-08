export type UserInfo = {
  name: string;
  title: string;
  experience: number;
  linkedinUrl: string;
};

export type UserExperience = {
  id?: string;
  title: string;
  subTitle: string;
  description: string;
  technolgies: string[];
};

export type UserProject = {
  id: string;
  title: string;
  description: string;
  framwork: string;
  moreTecnologes: string;
  websiteUrl: string;
};
