import React from 'react'
import { Layout } from '../../shared/layout'
import { InfoCard } from '../components'

import styles from './Home.module.scss'

export const Home = () => {
    return (
        <Layout>
            <InfoCard/>
        </Layout>
    )
}
