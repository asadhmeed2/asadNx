import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap'

import cn from 'classnames'

import axios from 'axios'


import { UserInfo, userService } from '@asadnx/shared-ts'
import { AppEnv } from '../../../env'

import styles from './InfoCard.module.scss'

 

export const InfoCard = () => {

    const [userInfo,setUserInfo]= useState<UserInfo | undefined>(undefined)
    const [loading,setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async ()=>{
           setLoading(true);

          const res =  await userService.getUserInfo(AppEnv.baseUrl);

          setUserInfo(res);
          setLoading(false);
        })()
    }, [])
    

  return (
    <>
    {!loading &&<Card className={cn(styles.card,'p-3 text-color background-color')}>
        <Container className={styles.container}>

            {/* name title */}
            <Row>
                <Col sm="12" md="6" className={cn(styles.name,"d-flex justify-content-center")}>
                <span> <span className={styles.title}>{` Name : `}</span> {userInfo?.name}</span>
                </Col>
                <Col  sm="12" md="6"className={cn(styles.name,"d-flex justify-content-center")}>
                <span> <span className={styles.title}>{` Title : `} </span>{userInfo?.title}</span>
                </Col>
            </Row>

            {/* experience */}
            <Row>
                <Col sm="12" md="12" className={'d-flex justify-content-center mt-2'}>
                 <span><span className={styles.title}> {` Experience : `}</span> {userInfo?.experience} {` year ${userInfo?.experience ? userInfo?.experience > 1 ?'\'s':"":0}`}</span>
                </Col>
            </Row>

            {/* linkedin */}
            <Row>
                <Col sm="12" md="12" className={'d-flex justify-content-center mt-2'}>
                 <span><span className={styles.title}> {` Lenkedin : `}
                 </span> <a rel="noopener noreferrer" href={userInfo?.linkedinUrl} target="_blank" className={styles.linkedinUrl}> to linkedin page</a> 
                 </span>
                </Col>
            </Row>
        </Container>
    </Card>}
    {loading && <Spinner variant='white'/>}
    </>
  )
}
