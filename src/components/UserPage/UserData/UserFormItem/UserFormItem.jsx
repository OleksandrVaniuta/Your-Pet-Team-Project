// import UserDataItem from './UserDataItem/UserDataItem';
// import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../redux/Auth/AuthOperations';
import { Formik, Form } from 'formik';
import { updateProfile } from '../../../../redux/Profile/ProfileOperations';
import * as Yup from 'yup';
import {
  UserInput,
  UserInputWrapper,
  UserInputTitle,
  UserInputBtn,
  UserInputValidateMsg,
} from './UserForm.styled';

// /^\\d{2}-\\d{2}-\\d{4}$/;
// /^\d{2}\-\d{2}\-\d{4}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  birthday: Yup.string()
    .matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format, should be dd-mm-yyyy')
    .required('Required'),
  phone: Yup.string()
    .matches(/^\+\d{12}$/, 'Invalid phone number')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
});

export default function UserFormItem({ edit, user, setEdit }) {
  const dispatch = useDispatch();

  // console.log(user);
  // console.log(userData.name);
  // const formikRef = useRef();

  // useEffect(() => {
  //   if (!edit) {
  //     formikRef.current.resetForm();
  //   }
  // }, [dispatch, edit]);
  // .replace(/-/g, '.')

  const handleSubmit = async (values, { validateForm }) => {
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      const filteredValues = Object.entries(values).filter(([key, value]) => {
        return user[key] !== value;
      });

      const filteredObject = Object.fromEntries(filteredValues);

      await dispatch(updateUser({ ...filteredObject }));
      dispatch(updateProfile());
      setEdit(!edit);
    } else {
      console.log('Форма содержит ошибки', validationErrors);
    }
  };

  return (
    <Formik
      // innerRef={formikRef}
      initialValues={{
        name: user.name || '',
        email: user.email || '',
        birthday: user.birthday || '',
        phone: user.phone || '',
        city: user.city || '',
      }}
      validationSchema={SignupSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, resetForm }) => (
        <Form>
          <UserInputWrapper>
            <UserInputTitle>Name:</UserInputTitle>
            <div>
              <UserInput name="name" type="text" disabled={!edit} />
              {errors.name && touched.name ? (
                <UserInputValidateMsg>{errors.name}</UserInputValidateMsg>
              ) : null}
            </div>
          </UserInputWrapper>
          <UserInputWrapper>
            <UserInputTitle>Email:</UserInputTitle>
            <div>
              <UserInput name="email" type="email" disabled={!edit} />
              {errors.email && touched.email ? (
                <UserInputValidateMsg>{errors.email}</UserInputValidateMsg>
              ) : null}
            </div>
          </UserInputWrapper>
          <UserInputWrapper>
            <UserInputTitle>Birthday:</UserInputTitle>
            <div>
              <UserInput
                name="birthday"
                type="text"
                placeholder="dd-mm-yyyy"
                disabled={!edit}
              />
              {errors.birthday && touched.birthday ? (
                <UserInputValidateMsg>{errors.birthday}</UserInputValidateMsg>
              ) : null}
            </div>
          </UserInputWrapper>
          <UserInputWrapper>
            <UserInputTitle>Phone:</UserInputTitle>
            <div>
              <UserInput
                name="phone"
                type="tell"
                placeholder="+380000000000"
                disabled={!edit}
              />
              {errors.phone && touched.phone ? (
                <UserInputValidateMsg>{errors.phone}</UserInputValidateMsg>
              ) : null}
            </div>
          </UserInputWrapper>
          <UserInputWrapper last>
            <UserInputTitle>City:</UserInputTitle>
            <div>
              <UserInput
                name="city"
                type="text"
                placeholder="NewYork, London, Berlin"
                disabled={!edit}
              />
              {errors.city && touched.city ? (
                <UserInputValidateMsg>{errors.city}</UserInputValidateMsg>
              ) : null}
            </div>
          </UserInputWrapper>
          {edit && <UserInputBtn type="submit">Save</UserInputBtn>}
        </Form>
      )}
    </Formik>
  );
}
