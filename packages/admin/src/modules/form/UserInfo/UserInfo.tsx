import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'

const schema = Yup.object({



})

const initValues = {
    
}

export const UserInfo = () => {
  return (
    <div>

        <Formik initialValues={initValues} 
                onSubmit={(values,formikHelpers)=>{console.log(values);}}
                validationSchema={schema}
        >
        <Form>
            
        </Form>

        </Formik>
    </div>
  )
}
