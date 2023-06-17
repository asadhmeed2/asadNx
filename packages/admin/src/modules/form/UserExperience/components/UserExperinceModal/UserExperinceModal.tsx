import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';


import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal ,Form as bsForm} from 'react-bootstrap'

import * as Yup from 'yup'

import { EUserExperienceFormNames, UserExperience } from '@asadnx/shared-ts';

import { AppInput } from '../../../../../shared';

import styles from './UserExprinceModal.module.scss'

type Props ={
    show:boolean;
    onHide:()=>void
}


const schema = Yup.object({
    [EUserExperienceFormNames.TITLE]: Yup.string().required('Name is required'),
    [EUserExperienceFormNames.SUB_TITLE]: Yup.string().required('Title is required'),
    [EUserExperienceFormNames.DESCRIPTION]: Yup.string().required('description is required'),
    [EUserExperienceFormNames.TECHNOLGIES]: Yup.array().required('Enter at least one technolgy')
    
    })


export const UserExperinceModal = ({show,onHide}:Props) => {

    const initValues : Partial<UserExperience> = useMemo(()=>({
        [EUserExperienceFormNames.TITLE]:  undefined,
        [EUserExperienceFormNames.SUB_TITLE]:  undefined,
        [EUserExperienceFormNames.DESCRIPTION]:  undefined,
        [EUserExperienceFormNames.TECHNOLGIES]:  undefined   
    }),[])

    const [technolgy,setTechnolgy] = useState<string>('');


    const onTechnolgyChange= useCallback((event:React.ChangeEvent<HTMLInputElement>)=>{

       setTechnolgy(event.target.value) 
    },[])


    const onAddTechnolgy = useCallback((frm:FormikProps<Partial<UserExperience>>)=>{
        if(technolgy){
            frm.setFieldValue(EUserExperienceFormNames.TECHNOLGIES,[...frm.values.technolgies ? frm.values.technolgies:[],technolgy])
            setTechnolgy('')
        }
    },[technolgy])

  return (
    <Modal show={show} onHide={onHide}>

        <Modal.Body>
        <Formik  
        validationSchema={schema} 
        initialValues={initValues}
        onSubmit={(values) => {
            console.log("🚀 ~ file: UserExperinceModal.tsx:111 ~ UserExperinceModal ~ values:", values)          
        }} >
            {(props)=>
            <Form>
              {/* title */}
              <div className={styles.input} id={EUserExperienceFormNames.TITLE}>
                    <span className={styles.lable}>Title :</span>
                    <Field name={EUserExperienceFormNames.TITLE} component={AppInput}/>
                </div>

                <div className={styles.error}>
                <ErrorMessage name={EUserExperienceFormNames.TITLE} />
                </div>

                {/* sub title */}
                <div className={styles.input} id={EUserExperienceFormNames.SUB_TITLE}>
                    <span className={styles.lable}>SubTitle :</span>
                    <Field name={EUserExperienceFormNames.SUB_TITLE} component={AppInput}/>
                </div>

                <div className={styles.error}>
                    <ErrorMessage name={EUserExperienceFormNames.SUB_TITLE} />
                </div>


                {/* description */}
                <div className={styles.input} id={EUserExperienceFormNames.DESCRIPTION}>
                    <span className={styles.lable} >Description :</span>
                    <Field name={EUserExperienceFormNames.DESCRIPTION} type="textarea" component={AppInput}/>  
                </div>

                <div className={styles.error}>
                <ErrorMessage name={EUserExperienceFormNames.DESCRIPTION} />
                </div>

                {/*technolgies */}
                <div className={styles.input} id={EUserExperienceFormNames.TECHNOLGIES}>
                    <span className={styles.lable}>Technolgies :</span>
                    <bsForm.Control value={technolgy}  onChange={onTechnolgyChange}/>
                    <Button onClick={()=>onAddTechnolgy(props)}>add</Button>
                </div>

                <div className="text-center">
                    {props.values.technolgies ? props.values.technolgies?.join(','):''}
                </div>

                
                <div className={styles.error}>
                <ErrorMessage name={EUserExperienceFormNames.TECHNOLGIES} />
                </div>

                <div className="text-center mt-5">
                  <Button type='submit'>submit</Button>
                </div>           
            </Form>}

        </Formik>
        </Modal.Body>
    </Modal>
  )
}
