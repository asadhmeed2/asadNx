import React from 'react'
import { Card } from 'react-bootstrap'


import styles from './InfoCard.module.scss'

const demoData = {
    name:'Asad Hmeed',
    title:'Junior Frontend Developer'

} 

export const InfoCard = () => {
  return (
    <Card>
        <div className={styles.name}>
            {demoData.name}
        </div>
        <div className={styles.name}>
            {demoData.title}
        </div>
    </Card>
  )
}
