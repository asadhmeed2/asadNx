import React from 'react'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { EUserInfoFormNames, UserInfo } from '@asadnx/shared-ts'

import { AppInput } from '../../../shared'
import { Button } from 'react-bootstrap'


import styles from './UserInfoForm.module.scss'


const schema = Yup.object({
[EUserInfoFormNames.NAME]: Yup.string().required('error')

})

const initValues : Partial<UserInfo> = {
    [EUserInfoFormNames.NAME]: undefined
    
}

export const UserInfoForm = () => {
  return (
    <div>

        <Formik initialValues={initValues} 
                onSubmit={(values,formikHelpers)=>{console.log(values);}}
                validationSchema={schema}
        >
            <Form>
                <div className={styles.input} id={EUserInfoFormNames.NAME}>
                    <label htmlFor={EUserInfoFormNames.NAME}>User Info :</label>
                    <Field name={EUserInfoFormNames.NAME} component={AppInput}/>
                    <ErrorMessage name={EUserInfoFormNames.NAME}/>
                </div>

                <div className="">
                  <Button type='submit'>submit</Button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}


