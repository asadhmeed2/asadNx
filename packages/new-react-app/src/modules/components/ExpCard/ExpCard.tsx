import React from 'react'

const demoData =[{id:1,title:'Jonior FullStak Developer', subTitle:'2022- Data lagoon (Practical project at a company in collaboration with Appleseeds)',
description:'Working for two months in a team and maintenance and add new features to data lagoon financial web app.',
technolgies: ["javascript", "react" , "HTML", "CSS", "MaterialUi" ,'flask']},
{id:1,title:'Jonior Frontend Developer', subTitle:'2022-2023 Runnableweb',
description:'working in a R&D team as a Frontend Developer',
technolgies: ["typescript", "react" ,"react native", "HTML", "CSS", "bootstrap"]}]

export const ExpCard = () => {
  return (
    <div className='text-white'>
        <h2>Experience</h2>
        <div className='mt-1'>
       {demoData.map(item =>{
           return <div >
            <h3>{item.title}</h3>
            <span>{item.subTitle}</span>
            <span>{item.description}</span>
            <span>{item.technolgies.join(', ')}</span>
        </div>
       })} 
       </div>
    </div>
  )
}
