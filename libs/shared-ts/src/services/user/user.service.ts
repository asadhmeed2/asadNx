import { EApiEndpoints } from '../../lib/enums';
import { UserExperience, UserInfo, UserProject } from '../../lib/types';

import axios from 'axios';

class UserService {
  async getUserInfo(baseUrl: string) {
    try {
      const res = await axios.get<UserInfo>(`${baseUrl}/userInfo`);

      return res.data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  async getUserExp(baseUrl: string) {
    try {
      const res = await axios.get<UserExperience[]>(
        `${baseUrl}/userInfo/${EApiEndpoints.EXPERIENCE}`
      );
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async getUserProjects(baseUrl: string) {
    try {
      const res = await axios.get<UserProject[]>(
        `${baseUrl}/userInfo/${EApiEndpoints.PROJECTS}`
      );
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  updateUserInfo(userInfo: Partial<UserInfo>) {
    console.log('updateUserInfo ', userInfo);
  }

  updateUserExperience(userExp: Partial<UserExperience>) {
    console.log('updateUserExperience', userExp);
  }

  async addUserExperience(baseUrl: string, userExp: UserExperience) {
    try {
      const res = await axios.post<UserExperience>(
        `${baseUrl}/userInfo/${EApiEndpoints.ADDEXPERIENCE}`
      );

      return res.data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
}

export const userService = new UserService();
