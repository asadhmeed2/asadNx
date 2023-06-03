import React from 'react'
import { Form, FormControlProps } from 'react-bootstrap'

import { FieldProps } from 'formik'

type Props = FieldProps & FormControlProps 

export const AppInput = ({field,meta,form ,...props}:Props) => {
  return (
    <Form.Control {...field} {...props} />
  )
}
