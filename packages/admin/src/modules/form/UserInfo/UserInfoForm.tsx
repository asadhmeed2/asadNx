import React from 'react'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import { EUserInfoFormNames, UserInfo } from '@asadnx/shared-ts'

import { AppInput } from '../../../shared'
import { Button } from 'react-bootstrap'


import styles from './UserInfoForm.module.scss'


const schema = Yup.object({
[EUserInfoFormNames.NAME]: Yup.string().required('enter your name'),
[EUserInfoFormNames.TITLE]: Yup.string().required('enter your title'),
[EUserInfoFormNames.EXP]: Yup.string().matches( /^\d{0,2}$/,'enter a number'),
[EUserInfoFormNames.LINKEDIN_URL]: Yup.string().matches(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
'enter a valid url ')

})

const initValues : Partial<UserInfo> = {
    [EUserInfoFormNames.NAME]: undefined,
    [EUserInfoFormNames.TITLE]: undefined,
    [EUserInfoFormNames.EXP]: undefined,
    [EUserInfoFormNames.LINKEDIN_URL]: undefined   
}

export const UserInfoForm = () => {
  return (
    <div>

        <Formik initialValues={initValues} 
                onSubmit={(values,formikHelpers)=>{console.log(values);}}
                validationSchema={schema}
        >
            <Form>
                {/* name */}
                <div className={styles.input} id={EUserInfoFormNames.NAME}>
                    <span>User Name :</span>
                    <Field name={EUserInfoFormNames.NAME} component={AppInput}/>
                </div>

                <ErrorMessage name={EUserInfoFormNames.NAME} />

                {/* title */}
                <div className={styles.input} id={EUserInfoFormNames.TITLE}>
                    <span >User Title :</span>
                    <Field name={EUserInfoFormNames.TITLE} component={AppInput}/>
                </div>

                <ErrorMessage name={EUserInfoFormNames.TITLE} />

                {/* experience */}
                <div className={styles.input} id={EUserInfoFormNames.EXP}>
                    <span >User Experience :</span>
                    <Field name={EUserInfoFormNames.EXP} component={AppInput}/>  
                </div>

                <ErrorMessage name={EUserInfoFormNames.EXP} />

                {/* linkedin url */}
                <div className={styles.input} id={EUserInfoFormNames.LINKEDIN_URL}>
                    <span >User Linkedin Url :</span>
                    <Field name={EUserInfoFormNames.LINKEDIN_URL} component={AppInput}/>
                </div>

                <ErrorMessage name={EUserInfoFormNames.LINKEDIN_URL} />

                <div className="">
                  <Button type='submit'>submit</Button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}


