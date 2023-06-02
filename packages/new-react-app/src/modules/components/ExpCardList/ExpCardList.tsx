import React, { useEffect, useState } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import axios from 'axios'

import { UserExperience } from '@asadnx/shared-ts'

import { AppEnv } from '../../../env'


export const ExpCardList = () => {

  const [experienceList , setExperienceList] = useState<UserExperience[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    
    (async()=>{
      try{
        setLoading(true)

        const res = await axios.get<UserExperience[]>(`${AppEnv.baseUrl}/userInfo/experience`)
  
        setExperienceList(res.data)
  
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false)
      }

    })()
      
    }, [])
  


  return (
      <>
        {!loading && 
          <Container  className='p-3 background-color'>
              <Row className='mt-1 d-flex text-color justify-content-center'>
                {experienceList.map(item =>{
                    return <Col sm="12" md="5" className='ms-1 ' key={item.id}>
                      <div className="fs-4">     
                          <span>{item.title}</span>
                      </div>
                      <span>{item.subTitle}</span>
                      <br />
                      <span>{item.description}</span>
                      <br />
                      <span >technolgies : <span className='text-success'>
                          {item.technolgies.join(', ')}
                      </span>
                      </span>
                  </Col>
                })} 
              </Row>
          </Container>}
          {loading && <Spinner variant='white'/>}
    </>
  )
}
