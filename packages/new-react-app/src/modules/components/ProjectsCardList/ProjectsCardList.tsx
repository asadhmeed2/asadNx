import React from 'react'
import { Card } from 'react-bootstrap'


const demodata = [{id:'1', title:'Aba Hatuv  אבא חטוב', description:'', framwork:'react native',moreTecnologes:'',websiteUrl:'https://www.leptin4life.com/'},
{id:'2', title:'yoyo delivery website', description:'', framwork:'nextjs',moreTecnologes:'',websiteUrl:'https://www.yoyo.delivery/'}
,{id:'2', title:'yoyo delivery app', description:'', framwork:'expo react native ',moreTecnologes:'',websiteUrl:'https://www.yoyo.delivery/'}]

export const ProjectsCardList = () => {
  return (
    <div className='overflow-scroll d-flex ps-1'>
    {
      demodata.map((item)=>{

       return <Card className='me-1'>
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
  )
}
