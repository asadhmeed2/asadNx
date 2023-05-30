import React from 'react'

const demoData =[{id:1,title:'Jonior FullStak Developer', subTitle:'2022- Data lagoon (Practical project at a company in collaboration with Appleseeds)',
description:'Working for two months in a team and maintenance and add new features to data lagoon financial web app.',
technolgies: ["javascript", "react" , "HTML", "CSS", "MaterialUi" ,'flask']},
{id:2,title:'Jonior Frontend Developer', subTitle:'2022-2023 Runnableweb',
description:'working in a R&D team as a Frontend Developer',
technolgies: ["typescript", "react" ,"react native", "HTML", "CSS", "bootstrap", 'github']}]

export const ExpCardList = () => {
  return (
        
    <div  className='p-4 background-color'>
        <div className='mt-1 d-flex text-color '>
       {demoData.map(item =>{
           return <div className='ms-1 ' key={item.id}>
            <div className="fs-4">     
                <span>{item.title}</span>
            </div>
            <span>{item.subTitle}</span>
            <br />
            <span>{item.description}</span>
            <br />
            <span >technolgies : <span className='text-success'>
                {item.technolgies.join(', ')}
            </span>
            </span>
        </div>
       })} 
       </div>
    </div>
  )
}
