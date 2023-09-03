import { Injectable } from '@nestjs/common';

import {
  CreateUserExperience,
  UserExperience,
  UserInfo,
  UserProject,
} from '@asadnx/shared-ts';
import { Experience, ExperienceDocument } from '../schemas/Experience.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectDocument } from '../schemas/project.schema';

@Injectable({})
export class UserInfoService {
  @InjectModel(Experience.name)
  private _experienceModel: Model<ExperienceDocument>;

  constructor(private _projectsModel: Model<ProjectDocument>) {}

  getUserInfo() {
    const demoData: UserInfo = {
      name: 'Asad Hmeed',
      title: 'Junior Frontend Developer',
      experience: 1,
      linkedinUrl: `https://www.linkedin.com/in/asad-hmeed-173a46130`,
    };

    return demoData;
  }

  async getUserExperience() {
    const realData = await this._experienceModel.find();

    console.log(
      '🚀 ~ file: userInfo.service.ts:31 ~ UserInfoService ~ getUserExperience ~ realData:',
      realData
    );

    // const data: UserExperience[] = [
    //   {
    //     id: '1',
    //     title: 'Jonior FullStak Developer',
    //     subTitle:
    //       '2022- Data lagoon (Practical project at a company in collaboration with Appleseeds)',
    //     description:
    //       'Working for two months in a team and maintenance and add new features to data lagoon financial web app.',
    //     technolgies: [
    //       'javascript',
    //       'react',
    //       'HTML',
    //       'CSS',
    //       'MaterialUi',
    //       'flask',
    //     ],
    //   },
    //   {
    //     id: '2',
    //     title: 'Jonior Frontend Developer',
    //     subTitle: '2022-2023 Runnableweb',
    //     description: 'working in a R&D team as a Frontend Developer',
    //     technolgies: [
    //       'typescript',
    //       'react',
    //       'react native',
    //       'HTML',
    //       'CSS',
    //       'bootstrap',
    //       'github',
    //     ],
    //   },
    // ];

    return realData;
  }

  async getUserProjects() {
    const res = await this._projectsModel.find();
    return res;
    // const data: UserProject[] = [
    //   {
    //     id: '1',
    //     title: 'Aba Hatuv  אבא חטוב',
    //     description: '',
    //     framwork: 'react native',
    //     moreTecnologes: '',
    //     websiteUrl: 'https://www.leptin4life.com/',
    //   },
    //   {
    //     id: '2',
    //     title: 'yoyo delivery website',
    //     description: '',
    //     framwork: 'nextjs',
    //     moreTecnologes: '',
    //     websiteUrl: 'https://www.yoyo.delivery/',
    //   },
    //   {
    //     id: '3',
    //     title: 'yoyo delivery app',
    //     description: '',
    //     framwork: 'expo react native ',
    //     moreTecnologes: '',
    //     websiteUrl: 'https://www.yoyo.delivery/',
    //   },
    // ];

    // return data;
  }

  async addUserExperience(experience: CreateUserExperience) {
    try {
      const exp = await this._experienceModel.create({ ...experience });

      return exp;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
