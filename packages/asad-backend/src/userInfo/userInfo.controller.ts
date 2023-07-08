import { Controller, Get, Post } from '@nestjs/common';
import { UserInfoService } from './userInfo.service';
import { EApiEndpoints } from '@asadnx/shared-ts';

@Controller('/userInfo')
export class UserInfoController {
  constructor(private _userInfoSvc: UserInfoService) {}

  @Get(`/${EApiEndpoints.EXPERIENCE}`)
  getUserExperience() {
    return this._userInfoSvc.getUserExperience();
  }

  @Get(`/${EApiEndpoints.PROJECTS}`)
  getUserProjects() {
    return this._userInfoSvc.getUserProjects();
  }

  @Get(`/${EApiEndpoints.USERINFO}`)
  getUserInfo() {
    return this._userInfoSvc.getUserInfo();
  }

  @Post(`/${EApiEndpoints.ADDEXPERIENCE}`)
  addUserExperience() {
    return this._userInfoSvc.addUserExperience();
  }
}
