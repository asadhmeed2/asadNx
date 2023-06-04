import React, { useCallback } from 'react'

import { Button } from 'react-bootstrap'

import * as Yup from 'yup'

import { ErrorMessage, Field, Form, Formik } from 'formik'


import cn from 'classnames'

import { EUserInfoFormNames, UserInfo } from '@asadnx/shared-ts'

import { AppInput } from '../../../shared'

import { userService } from '../../../services'

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

    const onSubmit = useCallback(
      (values:Partial<UserInfo>) => {
        userService.updateUserInfo(values) 
      },
      [],
    )
    

  return (
    <div>

        <Formik initialValues={initValues} 
                onSubmit={(values,formikHelpers)=>{onSubmit(values)}}
                validationSchema={schema}
        >
            <Form>
                {/* name */}
                <div className={cn(styles.input)} id={EUserInfoFormNames.NAME}>
                    <span className={styles.lable}>User Name :</span>
                    <Field name={EUserInfoFormNames.NAME} component={AppInput}/>
                </div>

                <ErrorMessage name={EUserInfoFormNames.NAME} />

                {/* title */}
                <div className={styles.input} id={EUserInfoFormNames.TITLE}>
                    <span className={styles.lable}>User Title :</span>
                    <Field name={EUserInfoFormNames.TITLE} component={AppInput}/>
                </div>

                <ErrorMessage name={EUserInfoFormNames.TITLE} />

                {/* experience */}
                <div className={styles.input} id={EUserInfoFormNames.EXP}>
                    <span className={styles.lable} >User Experience :</span>
                    <Field name={EUserInfoFormNames.EXP} component={AppInput}/>  
                </div>

                <ErrorMessage name={EUserInfoFormNames.EXP} />

                {/* linkedin url */}
                <div className={styles.input} id={EUserInfoFormNames.LINKEDIN_URL}>
                    <span className={styles.lable}>User Linkedin Url :</span>
                    <Field name={EUserInfoFormNames.LINKEDIN_URL} component={AppInput}/>
                </div>

                <ErrorMessage name={EUserInfoFormNames.LINKEDIN_URL} />

                <div className="text-center mt-5">
                  <Button type='submit'>submit</Button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}


