import React, { useCallback, useEffect, useState } from 'react'

import {  UserExperience, userService } from '@asadnx/shared-ts'
import { AppEnv } from '../../../env'





export const UserExperienceForm = () => {
 
    const [userExperienc,setUserExperienc]= useState<UserExperience []>([])


    useEffect(() => {
        (async ()=>{
           

          const res =  await userService.getUserExp(AppEnv.baseUrl);

          setUserExperienc(res);
          
        })()
    }, [])
    

  return (
    <div>

    </div>
  )
}
