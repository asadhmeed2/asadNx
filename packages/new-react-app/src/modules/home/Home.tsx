import React from 'react'
import { Layout } from '../../shared/layout'
import { ExpCard, InfoCard } from '../components'

import styles from './Home.module.scss'

export const Home = () => {
    return (
        <Layout>
            <InfoCard/>
            <div className="mt-2 px-4 ">
            <ExpCard/>
            </div>
        </Layout>
    )
}
