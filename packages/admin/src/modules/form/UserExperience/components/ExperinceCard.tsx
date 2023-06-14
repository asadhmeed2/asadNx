import { UserExperience } from '@asadnx/shared-ts'
import React from 'react'
import { Card } from 'react-bootstrap'

type Props ={
  userExperince: UserExperience
}

export const ExperinceCard = ({userExperince}:Props) => {
  return (
    <Card>
      <div className="">
        <span>{userExperince.title}</span>
      </div>

      <div className="">
      <span>{userExperince.subTitle}</span>
      </div>

      <div className="">
       <span>{userExperince.description}</span>
      </div>

      <div className="">
       <span>{`technolgies : `}</span><span>{userExperince.technolgies.join(',')}</span>
      </div>
    </Card>
  )
}
