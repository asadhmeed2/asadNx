import React from 'react'
import { Layout } from '../../shared/layout'
import { ExpCardList, InfoCard } from '../components'

import styles from './Home.module.scss'

export const Home = () => {
    return (
        <Layout>
            <InfoCard/>
            
            <div className="mt-2 px-4 ">
            <ExpCardList/>
            </div>

            <div className="mt-2 px-4 ">
            <ProjectsCardList/>
            </div>
        </Layout>
    )
}
