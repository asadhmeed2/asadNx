import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Button } from 'react-bootstrap';

import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import cn from 'classnames';

import { EUserInfoFormNames, UserInfo, userService } from '@asadnx/shared-ts';

import { AppInput } from '../../../shared';

import { AppEnv } from '../../../env';

import styles from './UserInfoForm.module.scss';

const schema = Yup.object({
  [EUserInfoFormNames.NAME]: Yup.string().required('Name is required'),
  [EUserInfoFormNames.TITLE]: Yup.string().required('Title is required'),
  [EUserInfoFormNames.EXP]: Yup.string()
    .matches(/^\d{0,2}$/, 'enter a number up to two digits')
    .required('Experience is required'),
  [EUserInfoFormNames.LINKEDIN_URL]: Yup.string()
    .matches(
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
      'enter a valid url '
    )
    .required('linkedin url is required'),
});

export const UserInfoForm = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const res = await userService.getUserInfo(AppEnv.baseUrl);

      setUserInfo(res);
    })();
  }, []);

  const onSubmit = useCallback((values: Partial<UserInfo>) => {
    userService.updateUserInfo(values);
  }, []);

  const initValues: Partial<UserInfo> = useMemo(
    () => ({
      [EUserInfoFormNames.NAME]: userInfo ? userInfo.name : undefined,
      [EUserInfoFormNames.TITLE]: userInfo ? userInfo.title : undefined,
      [EUserInfoFormNames.EXP]: userInfo ? userInfo.experience : undefined,
      [EUserInfoFormNames.LINKEDIN_URL]: userInfo
        ? userInfo.linkedinUrl
        : undefined,
    }),
    [userInfo]
  );

  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={(values, formikHelpers) => {
          onSubmit(values);
        }}
        validationSchema={schema}
        enableReinitialize
      >
        <Form>
          {/* name */}
          <div className={cn(styles.input)} id={EUserInfoFormNames.NAME}>
            <span className={styles.lable}>User Name :</span>
            <Field name={EUserInfoFormNames.NAME} component={AppInput} />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserInfoFormNames.NAME} />
          </div>

          {/* title */}
          <div className={styles.input} id={EUserInfoFormNames.TITLE}>
            <span className={styles.lable}>User Title :</span>
            <Field name={EUserInfoFormNames.TITLE} component={AppInput} />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserInfoFormNames.TITLE} />
          </div>

          {/* experience */}
          <div className={styles.input} id={EUserInfoFormNames.EXP}>
            <span className={styles.lable}>User Experience :</span>
            <Field name={EUserInfoFormNames.EXP} component={AppInput} />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserInfoFormNames.EXP} />
          </div>

          {/* linkedin url */}
          <div className={styles.input} id={EUserInfoFormNames.LINKEDIN_URL}>
            <span className={styles.lable}>User Linkedin Url :</span>
            <Field
              name={EUserInfoFormNames.LINKEDIN_URL}
              component={AppInput}
            />
          </div>

          <div className={styles.error}>
            <ErrorMessage name={EUserInfoFormNames.LINKEDIN_URL} />
          </div>

          <div className="text-center mt-5">
            <Button type="submit">submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
