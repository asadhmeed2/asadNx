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

            <div className="text-white">
            <h2>Experience</h2>
            </div>

            <div className="mt-2 px-4 ">
            <ExpCardList/>
            </div>

            <div className="text-white">
            <h2>projects that i take part of :</h2>
            </div>

            <div className="mt-2 px-4 ">
            <ProjectsCardList/>
            </div>
        </Layout>
    )
}
