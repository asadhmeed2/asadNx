import { UserExperience } from '@asadnx/shared-ts'
import axios from 'axios'
import { AppEnv } from '../../../env'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


export const ExpCardList = () => {

  const [experienceList , setExperienceList] = useState<UserExperience[]>([])


  useEffect(() => {
    
  (async()=>{
    try{

      const res = await axios.get<UserExperience[]>(`${AppEnv.baseUrl}/userInfo/experience`)

      console.log("🚀 ~ file: ExpCardList.tsx:20 ~ res:", res.data)

      setExperienceList(res.data)

    }catch(err){
      console.error(err);
    }
  })()
    
  }, [])
  


  return (
        
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
    </Container>
  )
}
