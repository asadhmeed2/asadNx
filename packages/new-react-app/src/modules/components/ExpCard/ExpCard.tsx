import React from 'react'

const demoData =[{id:1,title:'Jonior FullStak Developer', subTitle:'2022- Data lagoon (Practical project at a company in collaboration with Appleseeds)',
description:'Working for two months in a team and maintenance and add new features to data lagoon financial web app.',
technolgies: ["javascript", "react" , "HTML", "CSS", "MaterialUi" ,'flask']},
{id:1,title:'Jonior Frontend Developer', subTitle:'2022-2023 Runnableweb',
description:'working in a R&D team as a Frontend Developer',
technolgies: ["typescript", "react" ,"react native", "HTML", "CSS", "bootstrap"]}]

export const ExpCard = () => {
  return (
    <div  className='bg-white p-4'>
        <h2>Experience</h2>
        <div className='mt-1'>
       {demoData.map(item =>{
           return <div >
            <span>{item.title}</span>
            <span>{item.subTitle}</span>
            <br />
            <span>{item.description}</span>
            <br />
            <span>technolgies :{item.technolgies.join(', ')}</span>
        </div>
       })} 
       </div>
    </div>
  )
}
