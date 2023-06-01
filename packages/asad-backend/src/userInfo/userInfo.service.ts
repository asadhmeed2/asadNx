import { Injectable } from "@nestjs/common";

import { UserExperience, UserInfo } from '@asadnx/shared-ts'

@Injectable({})
export class UserInfoService{
    getUserInfo(){

        const demoData : UserInfo = {
            name:'Asad Hmeed',
            title:'Junior Frontend Developer',
            experience:1,
            linkedinUrl:`https://www.linkedin.com/in/asad-hmeed-173a46130`
        } 

        return demoData
    }

    getUserExperience(){

        const data : UserExperience[] =[
            {id:'1',title:'Jonior FullStak Developer', subTitle:'2022- Data lagoon (Practical project at a company in collaboration with Appleseeds)',
            description:'Working for two months in a team and maintenance and add new features to data lagoon financial web app.',
            technolgies: ["javascript", "react" , "HTML", "CSS", "MaterialUi" ,'flask']},
            {id:'2',title:'Jonior Frontend Developer', subTitle:'2022-2023 Runnableweb',
            description:'working in a R&D team as a Frontend Developer',
            technolgies: ["typescript", "react" ,"react native", "HTML", "CSS", "bootstrap", 'github']}]


        return data
    }
}