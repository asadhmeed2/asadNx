import React from 'react'
import { Layout } from '../../shared/layout'
import { ExpCardList, InfoCard ,ProjectsCardList} from '../components'

import styles from './Home.module.scss'

export const Home = () => {
    return (
        <Layout>
            <div className="">
            <i className="bi bi-file-earmark-person"></i>
            </div>
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
