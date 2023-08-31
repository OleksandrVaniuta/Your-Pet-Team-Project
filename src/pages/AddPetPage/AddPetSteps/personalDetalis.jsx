import { Formik, Form } from 'formik';
import React from 'react';
import { useState } from 'react';
import { AddPetHeader } from './addHeader';

import {
  InputBox,
  TitleLabel,
  FieldInput,
  Label,
} from '../Styles/personalDetalis.styled';
import {
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
  BtnBox,
} from '../Styles/button.styled';
import { Container } from '../addPetPage.styled';
import {
  ValidateSchemaAdd,
  ValidateSchemaMyPet,
} from '../ValidateAddPetPage/ValidateSchemaAdd';
import { Dog, Back } from './addIcon';

export const PersonalDetals = ({
  pets,
  category,
  setStep,
  handleNext,
  handleFinalState,
}) => {
  const [name, setName] = useState(pets.name);
  const [date, setDate] = useState(pets.date);
  const [type, setType] = useState(pets.type);
  const [title, setTitle] = useState(pets.title);

  const handleSubmit = async values => {
    handleNext(values);
  };


  const validate =
    category !== 'your pet' ? ValidateSchemaAdd : ValidateSchemaMyPet;



  return (
    <Formik
      initialValues={{
        name: name || pets.name,
        date: date || pets.date,
        type: type || pets.type,
        title: title || pets.title,
      }}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize={true}
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
                    onChange={e => {
                      setTitle(e.target.value);
                      handleFinalState({ title: e.target.value });
                    }}
                    errors={touched.title && errors.title}
                  />
                  {touched.title && errors.title && <div>{errors.title}</div>}
                </Label>
              )}
              <Label>
                <TitleLabel>Pet`s name</TitleLabel>
                <FieldInput
                  type="text"
                  placeholder="Name pet"
                  name="name"
                  onChange={e => {
                    setName(e.target.value);
                    handleFinalState({ name: e.target.value });
                  }}
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
                  onChange={e => {
                    setDate(e.target.value);
                    handleFinalState({ date: e.target.value });
                  }}
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
                  onChange={e => {
                    setType(e.target.value);
                    handleFinalState({ type: e.target.value });
                  }}
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
