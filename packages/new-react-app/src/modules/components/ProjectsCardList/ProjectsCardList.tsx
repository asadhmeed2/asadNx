import React from 'react'
import { Card } from 'react-bootstrap'

import cn from 'classnames'


import styles from './ProjectsCardList.module.scss'

const demodata = [{id:'1', title:'Aba Hatuv  אבא חטוב', description:'', framwork:'react native',moreTecnologes:'',websiteUrl:'https://www.leptin4life.com/'},
{id:'2', title:'yoyo delivery website', description:'', framwork:'nextjs',moreTecnologes:'',websiteUrl:'https://www.yoyo.delivery/'}
,{id:'2', title:'yoyo delivery app', description:'', framwork:'expo react native ',moreTecnologes:'',websiteUrl:'https://www.yoyo.delivery/'}]

export const ProjectsCardList = () => {
  return (
    <>
      <h2>projects that i take part of :</h2>
    <div className={cn('d-flex ps-1 justify-content-center',styles.list)}>
    {
      demodata.map((item)=>{

       return <Card className='me-1 p-2'>
                  <div className="">
                    <span>{item.title}</span>
                  </div>

                  <div className="">
                    <span>{item.framwork}</span>
                  </div>


                  <div className="">
                    <a href={item.websiteUrl}>{item.websiteUrl}</a>
                  </div>
                </Card>
      })
    }
    </div>
    </>
  )
}
