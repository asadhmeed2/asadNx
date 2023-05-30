import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import cn from 'classnames'

import axios from 'axios'


import { UserInfo } from '@asadnx/shared-ts'
import { AppEnv } from '../../../env'

import styles from './InfoCard.module.scss'

 

export const InfoCard = () => {

    const [userInfo,setUserInfo]= useState<UserInfo | undefined>(undefined)

    useEffect(() => {
        (async ()=>{
            const res = await axios.get<UserInfo>(`${AppEnv.baseUrl}/userInfo`);
            setUserInfo(res.data)
        })()
    }, [])
    

  return (
    <Card className={cn(styles.card,'p-3 text-color background-color')}>
        <Container className={styles.container}>
            <Row>
                <Col sm="12" md="6" className={cn(styles.name,"d-flex justify-content-center")}>
                <span className={styles.title}>{` Name :`}</span><span> {userInfo?.name}</span>
                </Col>
                <Col  sm="12" md="6"className={cn(styles.name,"d-flex justify-content-center")}>
                <span className={styles.title}>{` Title :`} </span><span>{userInfo?.title}</span>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" className={'d-flex justify-content-center mt-2'}>
                <span className={styles.title}>{` Experience :`}</span> <span>{userInfo?.experience} {` year ${userInfo?.experience ?? 0 >1 ?'\'s':""}`}</span>
                </Col>
                
            </Row>
        </Container>
    </Card>
  )
}
