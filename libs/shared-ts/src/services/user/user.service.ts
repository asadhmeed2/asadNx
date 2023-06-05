import { UserInfo } from "../../lib/types";

import axios from 'axios'


class UserService {
   
    async getUserInfo(baseUrl:string){
        try{
   
            const res = await axios.get<UserInfo>(`${baseUrl}/userInfo`);
            
            return res.data
        }catch(err){
            console.error(err);
        }
    }

    updateUserInfo(userInfo:Partial<UserInfo>){
        console.log('updateUserInfo ',userInfo);
    }

}

export const userService = new UserService();