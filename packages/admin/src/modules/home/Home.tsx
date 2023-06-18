import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { UserInfoForm } from '../form'
import { UserExperienceTab } from '../form/UserExperience/UserExperienceTab'
import { UserProjectsForm } from '../form/UserProjects'

export const Home = () => {
  return (
    <div>
        <Tabs
            defaultActiveKey="userInfo"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="userInfo" title="Info" className='p-2'>
                <UserInfoForm/>
            </Tab>
            <Tab eventKey="UserExperience" title="Experience">
                <UserExperienceTab/>
            </Tab>
            <Tab eventKey="UserProjects" title="Projects" >
               <UserProjectsForm/>
            </Tab>  
        </Tabs>
    </div>
  )
}
