import { Formik, Form } from 'formik';
import React from 'react';
import { AddPetHeader } from '../AddHeader/addHeader';

import {
  InputBox,
  TitleLabel,
  FieldInput,
  Label,
} from '../../Styles/personalDetalis.styled';
import {
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
  BtnBox,
} from '../../Styles/button.styled';
import { Container } from '../../Styles/addPetPage.styled';
import {
  ValidateSchemaAdd,
  ValidateSchemaMyPet,
} from '../../ValidateAddPetPage/ValidateSchemaAdd';

import { Dog, Back } from '../AddIcons/addIcon';

export const PersonalDetals = ({ pets, category, setStep, handleNext }) => {
  const handleSubmit = async values => {
    handleNext(values);
  };
  console.log(pets);

  // const handleSubmit = async (values, { validateForm }) => {
  //   // handleNext(values);
  //   const validationErrors = await validateForm(values);

  //   if (Object.keys(validationErrors).length === 0) {
  //     if (category !== 'your pet') {
  //       values.title = 'your pet';
  //     }
  //     handleNext(values);

  //     console.log(values);
  //   } else {
  //     console.log('Форма содержит ошибки', validationErrors);
  //   }
  // };
  const validate =
    category !== 'your pet' ? ValidateSchemaAdd : ValidateSchemaMyPet;

  return (
    <Formik
      initialValues={{
        name: pets.name,
        date: pets.date,
        type: pets.type,
        title: pets.title,
      }}
      // validateOnChange={false}
      // validateOnBlur={false}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form>
          <Container category={category} step={1}>
            <AddPetHeader category={category} step={1} />

            <InputBox category={category}>
              {category !== 'your pet' && (
                <Label>
                  <TitleLabel>Title of add</TitleLabel>
                  <FieldInput
                    type="text"
                    placeholder="Add title"
                    name="title"
                    errors={touched.title && errors.title}
                  />
                  {touched.title && errors.title && <div>{errors.title}</div>}
                </Label>
              )}
              <Label>
                <TitleLabel>Pet`s name</TitleLabel>
                <FieldInput
                  type="text"
                  placeholder="Type name pet"
                  name="name"
                  errors={touched.name && errors.name}
                />
                {touched.name && errors.name && <div>{errors.name}</div>}
              </Label>
              <Label>
                <TitleLabel>Date of birth</TitleLabel>
                <FieldInput
                  type="text"
                  placeholder="Date of birth, DD-MM-YYYY"
                  name="date"
                  errors={touched.date && errors.date}
                />
                {touched.date && errors.date && <div>{errors.date}</div>}
              </Label>
              <Label>
                <TitleLabel>Type</TitleLabel>
                <FieldInput
                  type="text"
                  placeholder="Type of pet"
                  name="type"
                  errors={touched.type && errors.type}
                />
                {touched.type && errors.type && <div>{errors.type}</div>}
              </Label>
            </InputBox>
            <BtnBox>
              <BtnNextDone type="submit">
                <BtnTitle>Next</BtnTitle>
                <Dog />
              </BtnNextDone>
              <BtnCancelBack type="button" onClick={() => setStep(0)}>
                <Back />
                <LinkTitle>Back</LinkTitle>
              </BtnCancelBack>
            </BtnBox>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
