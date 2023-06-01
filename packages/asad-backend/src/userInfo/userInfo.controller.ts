import { Controller, Get } from "@nestjs/common";
import { UserInfoService } from "./userInfo.service";

@Controller("/userInfo")
export class UserInfoController{
constructor(private _userInfoSvc:UserInfoService){}


@Get('/experience')
getUserExperience(){
    return this._userInfoSvc.getUserExperience();
}

@Get('/projects')
getUserProjects(){
    return this._userInfoSvc.getUserProjects();
}


@Get('/')
getUserInfo(){
    return this._userInfoSvc.getUserInfo();
}

}