import React from 'react'
import { Modal } from 'react-bootstrap'

type Props ={
    show:boolean;
    onHide:()=>void
}

export const UserExperinceModal = ({show,onHide}:Props) => {
  return (
    <Modal show={show} onHide={onHide}>


    </Modal>
  )
}
