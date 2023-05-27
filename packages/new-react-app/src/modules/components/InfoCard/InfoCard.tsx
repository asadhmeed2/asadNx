import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import cn from 'classnames'

import styles from './InfoCard.module.scss'

const demoData = {
    name:'Asad Hmeed',
    title:'Junior Frontend Developer',
    experience:1,
    knowledgeIn:['react','react native','vue' , 'bootstrap','html','css','typescript']

} 

export const InfoCard = () => {
  return (
    <Card className={cn(styles.card,'p-3')}>
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
                <Col sm="12" md="6" className={styles.name}>
                <span className={styles.title}>{` Experience :`}</span> <span>{demoData.experience} {` year ${demoData.experience >1 ?'\'s':""}`}</span>
                </Col>
                <Col  sm="12" md="6"className={styles.name}>
                <span className={styles.title}>{` Knowledge in :`}</span> <span> {demoData.knowledgeIn.join(',')}</span>
                </Col>
            </Row>
        </Container>
    </Card>
  )
}
