import React, { useCallback, useEffect, useState } from 'react'

import {  UserExperience, userService } from '@asadnx/shared-ts'
import { AppEnv } from '../../../env'
import { ExperinceCard } from './components'
import { Button } from 'react-bootstrap'





export const UserExperienceTab = () => {
 
    const [userExperienc,setUserExperienc]= useState<UserExperience []>([])

    const [showExpFormModal, setShowExpFormModal] = useState<boolean>(false)

    useEffect(() => {
        (async ()=>{
           

          const res =  await userService.getUserExp(AppEnv.baseUrl);

          console.log("🚀 ~ file: UserExperienceTab.tsx:23 ~ res:", res)

          setUserExperienc(res);
          
        })()
    }, [])

    const onAddExpince = useCallback(()=>{
      setShowExpFormModal(true)
    },[])
    

  return (
    <div>
      {userExperienc.map(item=>{
        return<ExperinceCard userExperince={item}/>
      })}

      <Button onClick={onAddExpince}>add experience</Button>
    </div>
  )
}
