import React from 'react'
import { Image } from 'react-bootstrap'

import cn from 'classnames'

import { Layout } from '../../shared/layout'
import { ExpCardList, InfoCard ,ProjectsCardList} from '../components'

import reactBg from '../../assets/images/react-bg.jpg'

import styles from './Home.module.scss'

export const Home = () => {
    return (
        <Layout>
            <div className={cn("position-absolute w-100",styles.imageWrapper)}>
                <Image src={reactBg} className={styles.bgImage}/>
            </div>

            <div className={cn("position-absolute",styles.content)}>
            
            <InfoCard/>

            <div className="text-white mt-2">
            <h2 className='text-center '>Experience</h2>
            </div>

            <div className="mt-2 px-4 ">
            <ExpCardList/>
            </div>

            <div className="text-white mt-2">
            <h2 className='text-center'>projects that i take part of </h2>
            </div>

            <div className="mt-2 px-4 ">
            <ProjectsCardList/>
            </div>
            </div>
        </Layout>
    )
}
