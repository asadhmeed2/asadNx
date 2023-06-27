import React, { useMemo } from 'react';

import { EUserProjectFormNames, UserProject } from '@asadnx/shared-ts';
import { ErrorMessage, Field, Formik } from 'formik';
import { AppInput } from '../../../shared';
import { Button, Form } from 'react-bootstrap';

import * as Yup from 'yup';

import cn from 'classnames';

import styles from './UserProjectForm.module.scss';

const schema = Yup.object({
  [EUserProjectFormNames.TITLE]: Yup.string().required('Title is required'),
  [EUserProjectFormNames.DESCRIPTION]: Yup.string().required(
    'Description is required'
  ),
});

export const UserProjectsForm = () => {
  const initValues: Partial<UserProject> = useMemo(
    () => ({
      [EUserProjectFormNames.TITLE]: undefined,
      [EUserProjectFormNames.DESCRIPTION]: undefined,
    }),
    []
  );

  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
        }}
        validationSchema={schema}
        enableReinitialize
      >
        <Form>
          {/* title */}
          <div className={cn(styles.input)} id={EUserProjectFormNames.TITLE}>
            <span className={styles.lable}>Title :</span>
            <Field name={EUserProjectFormNames.TITLE} component={AppInput} />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserProjectFormNames.TITLE} />
          </div>

          {/* desctiption */}
          <div
            className={cn(styles.input)}
            id={EUserProjectFormNames.DESCRIPTION}
          >
            <span className={styles.lable}>Description :</span>
            <Field
              name={EUserProjectFormNames.DESCRIPTION}
              component={AppInput}
            />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserProjectFormNames.DESCRIPTION} />
          </div>

          {/* framwork */}
          <div className={cn(styles.input)} id={EUserProjectFormNames.FRAMWORK}>
            <span className={styles.lable}>Description :</span>
            <Field name={EUserProjectFormNames.FRAMWORK} component={AppInput} />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserProjectFormNames.FRAMWORK} />
          </div>

          {/* tecnologes */}
          <div
            className={cn(styles.input)}
            id={EUserProjectFormNames.TECHNOLGIES}
          >
            <span className={styles.lable}>Tecnologes :</span>
            <Field
              name={EUserProjectFormNames.TECHNOLGIES}
              component={AppInput}
            />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserProjectFormNames.TECHNOLGIES} />
          </div>

          <div className="text-center mt-5">
            <Button type="submit">submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
