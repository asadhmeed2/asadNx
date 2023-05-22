import React from 'react'
import { Card } from 'react-bootstrap'


import { demoData } from '@asadnx/shared-ts'

import styles from './InfoCard.module.scss'

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
