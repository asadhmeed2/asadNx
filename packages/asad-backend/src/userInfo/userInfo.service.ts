import { Injectable } from "@nestjs/common";

import { UserInfo } from '@asadnx/shared-ts'

@Injectable({})
export class UserInfoService{
    getUserInfo(){

        const demoData : UserInfo = {
            name:'Asad Hmeed',
            title:'Junior Frontend Developer',
            experience:1,
        } 

        return demoData
    }
}