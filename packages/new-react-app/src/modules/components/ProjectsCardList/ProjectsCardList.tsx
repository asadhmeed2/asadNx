import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'

import cn from 'classnames'

import axios from 'axios'

import { UserProject } from '@asadnx/shared-ts'

import { AppEnv } from '../../../env'

import styles from './ProjectsCardList.module.scss'


export const ProjectsCardList = () => {

  const [projects,setProjects] =useState<UserProject[]>([])
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    
    (async()=>{
      try{
        setLoading(true)
        const res = await axios.get<UserProject[]>(`${AppEnv.baseUrl}/userInfo/projects`)
  
        setProjects(res.data);
  
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false);
      }
    })()
      
    }, [])

  return (
    <>
    {!loading && <div className={cn('d-flex ps-1 justify-content-center',styles.list)}>
    {
      projects.map((item)=>{
        
       return <Card className='me-1 mt-1 p-2 background-color text-color' key={item.id}>
                  <div className="">
                    <span>{item.title}</span>
                  </div>

                  <div className="">
                    <span>{item.framwork}</span>
                  </div>


                  <div className="">
                    <a href={item.websiteUrl}>{item.websiteUrl}</a>
                  </div>
                </Card>
      })
    }
    </div>}

    {loading && <Spinner variant='white'/>}
        </>
  )
}
