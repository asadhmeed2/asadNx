import { UserInfo } from "@asadnx/shared-ts";

class UserService {
   
    updateUserInfo(userInfo:Partial<UserInfo>){
        console.log('updateUserInfo ',userInfo);
    }

}

export const userService = new UserService();