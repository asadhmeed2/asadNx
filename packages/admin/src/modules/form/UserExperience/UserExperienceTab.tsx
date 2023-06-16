import React, { useCallback, useEffect, useState } from 'react'

import {  UserExperience, userService } from '@asadnx/shared-ts'
import { AppEnv } from '../../../env'
import { ExperinceCard, UserExperinceModal } from './components'
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

    const onShowExrnceModal = useCallback(()=>{
      setShowExpFormModal(true)
    },[])
    
    const onHideExprinceModal = useCallback(()=>{
      setShowExpFormModal(false)
    },[])
    

  return (
    <div>
      {userExperienc.map(item=>{
        return<ExperinceCard key={item.id} userExperince={item}/>
      })}

      <Button onClick={onShowExrnceModal}>add experience</Button>   


      {showExpFormModal && <UserExperinceModal show={showExpFormModal} onHide={onHideExprinceModal}/>}
    </div>
  )
}
