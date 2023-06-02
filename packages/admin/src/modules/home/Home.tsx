import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export const Home = () => {
  return (
    <div><Tabs
    defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="userInfo" title="Info">
        Tab content for Home
      </Tab>
      <Tab eventKey="UserExperience" title="Experience">
        Tab content for Profile
      </Tab>
      <Tab eventKey="UserProjects" title="Projects" >
        Tab content for Contact
      </Tab>
        
        
        </Tabs></div>
  )
}
