import { UserExperience, UserInfo, UserProject } from "../../lib/types";

import axios from 'axios'


class UserService {
   
    async getUserInfo(baseUrl:string){
        try{
   
            const res = await axios.get<UserInfo>(`${baseUrl}/userInfo`);
            
            return res.data
        }catch(err){
            console.error(err);
            return []
        }
    }

    async getUserExp(baseUrl:string){
        try{
   
                        
            const res = await axios.get<UserExperience[]>(`${baseUrl}/userInfo/experience`)
            return res.data
        }catch(err){
            console.error(err);
            return []
        }
    }

    async getUserProjects(baseUrl:string){
        try{
            const res = await axios.get<UserProject[]>(`${baseUrl}/userInfo/projects`)
            return res.data
        }catch(err){
            console.error(err);
            return []
        }
    }

    updateUserInfo(userInfo:Partial<UserInfo>){
        console.log('updateUserInfo ',userInfo);
    }

}

export const userService = new UserService();