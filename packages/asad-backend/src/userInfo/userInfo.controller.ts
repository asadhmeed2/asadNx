import { Controller, Get } from "@nestjs/common";
import { UserInfoService } from "./userInfo.service";

@Controller("/userInfo")
export class UserInfoController{
constructor(private _userInfoSvc:UserInfoService){}

@Get('/')
getUserInfo(){
    return this._userInfoSvc.getUserInfo();
}

}