import { Formik, Form } from 'formik';
import React from 'react';
import { AddPetHeader } from './addHeader';
// import { ReactComponent as BackIcon } from '../AddPetPage/iconAdd/back.svg';
// import { ReactComponent as DogIcon } from '../AddPetPage/iconAdd/dog.svg';
import {
  // Container,
  InputBox,
  TitleLabel,
  FieldInput,
} from '../Styles/personalDetalis.styled';
import {
  // BtnBox,
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
} from '../Styles/button.styled';
// import { AddButtons } from './addButtons'
import * as Yup from 'yup';

const ValidateSchemaAdd = Yup.object().shape({
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
  date: Yup.string()
    .matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format')
    .required('Required'),
  type: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
  // title: Yup.string().max(50, 'Too Long!'),
  // .required('Required'),
});

export const PersonalDetals = ({
  setPets,
  pets,
  category,
  setStep,
  handleNext,
}) => {
  const handleSubmit = async values => {
    handleNext(values);
  };

  return (
    <Formik
      initialValues={{
        name: pets.name,
        date: pets.date,
        type: pets.type,
        title: pets.title,
      }}
      validationSchema={ValidateSchemaAdd}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form>
          <AddPetHeader category={category} step={1} />

          <InputBox category={category}>
            {category !== 'your pet' && (
              <div>
                <TitleLabel>Title of add</TitleLabel>
                <FieldInput
                  type="text"
                  //
                  placeholder="Add title"
                  name="title"
                />
              </div>
            )}
            <div>
              <TitleLabel>Pet`s name</TitleLabel>
              <FieldInput
                type="text"
                // onChange={handleChange}
                placeholder="Type name pet"
                name="name"
                // errors={touched.name && errors.name}
              />
              {/* {touched.name && errors.name && <div>{errors.name}</div>} */}
            </div>
            <div>
              <TitleLabel>Date of birth</TitleLabel>
              <FieldInput
                type="text"
                // onChange={handleChange}
                placeholder="Date of birth, DD-MM-YYYY"
                name="date"
                // errors={touched.date && errors.date}
              />
              {/* {touched.date && errors.date && <div>{errors.date}</div>} */}
            </div>
            <div>
              <TitleLabel>Type</TitleLabel>
              <FieldInput
                type="text"
                // onChange={handleChange}
                placeholder="Type of pet"
                name="type"
                // errors={touched.type && errors.type}
              />
              {/* {touched.type && errors.type && <div>{errors.type}</div>} */}
            </div>
          </InputBox>
          <BtnNextDone
            type="submit"
            // onClick={() => {
            //   console.log('send');

            //   setStep(2);
            //   console.log(step);
            // }}
          >
            <BtnTitle>Next</BtnTitle>
            {/* <DogIcon
                      sx={[
                        {
                          width: 24,
                          height: 24,
                          color: 'fff',
                        },
                      ]}
                    /> */}
          </BtnNextDone>
          <BtnCancelBack type="button" onClick={() => setStep(0)}>
            {/* <BackIcon
                    sx={[
                      {
                        width: 24,
                        height: 24,
                        color: '#54adff',
                      },
                    ]}
                  /> */}
            <LinkTitle>Back</LinkTitle>
          </BtnCancelBack>
        </Form>
      )}
    </Formik>
  );
};
