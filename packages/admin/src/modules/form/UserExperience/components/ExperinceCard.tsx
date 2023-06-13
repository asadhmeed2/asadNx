import { UserExperience } from '@asadnx/shared-ts'
import React from 'react'

type Props ={
  userExperince: UserExperience
}

export const ExperinceCard = ({userExperince}:Props) => {
  return (
    <div>{userExperince.title}</div>
  )
}
