import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import cn from 'classnames'

import styles from './InfoCard.module.scss'

const demoData = {
    name:'Asad Hmeed',
    title:'Junior Frontend Developer',
    experience:1,
    

} 

export const InfoCard = () => {
  return (
    <Card className={cn(styles.card,'p-3 text-color background-color')}>
        <Container className={styles.container}>
            <Row>
                <Col sm="12" md="6" className={styles.name}>
                <span className={styles.title}>{` Name :`}</span><span> {demoData.name}</span>
                </Col>
                <Col  sm="12" md="6"className={styles.name}>
                <span className={styles.title}>{` Title :`} </span><span>{demoData.title}</span>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" className={'d-flex justify-content-center mt-2'}>
                <span className={styles.title}>{` Experience :`}</span> <span>{demoData.experience} {` year ${demoData.experience >1 ?'\'s':""}`}</span>
                </Col>
                
            </Row>
        </Container>
    </Card>
  )
}
