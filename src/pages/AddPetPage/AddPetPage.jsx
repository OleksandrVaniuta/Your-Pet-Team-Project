import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { ChooseOption } from 'components/AddPetPage/AddPetSteps/chooseOption';
import { PersonalDetals } from 'components/AddPetPage/AddPetSteps/personalDetalis';
import { MoreInfo } from 'components/AddPetPage/AddPetSteps/moreInfo';
import { Container } from './addPetPage.styled';
import { ValidSchema } from './ValidateAddPetPage/ValidateSchemaAdd';

import {
  BtnBox,
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
} from './Styles/button.styled';

 const initialPets = {
  category: '',
  name: '',
  date: '',
  type: '',
  title: '',
  file: '',
  sex: '',
  price: '',
  city: '',
  comments: '',
};

export const AddPetPage = () => {
  const [step, setStep] = useState(0);
  // const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  //Click для повернення на попередній крок та звідки прийшов
  const handleOnClick = (e, step) => {
    e.preventDefault();
    step === 0 ? navigate(-1) : setStep(step - 1);
  };

  //click  для переходу вперед для 1 та 2 кроку
  const handleClickNext = e => {
    e.preventDefault();

    if (step === 2) {
      return;
    }
    setStep(step + 1);
  };

  // const resetForm = () => {
  //   const pets = {};
  // }
   
    
    //фінальний сабміт : валідаціяб пердача нанних та перехід до сторінок
    const handleSubmit = async pets => {
      const formData = new FormData();

      formData.append('category', pets.category);
      formData.append('name', pets.name);
      formData.append('type', pets.type);
      formData.append('fil', pets.file);
      formData.append('comments', pets.comments);
      formData.append('date', pets.date);

      if (pets.category === 'your pet') {
        try {
          const request = new XMLHttpRequest();
          await request.open('POST', formData, 'https://localhost:3000/api/pets');
          navigate('UserPage');
          // resetForm();
        } catch (error) {
          return error.message;
        }
      }


      formData.append('title', pets.title);
      formData.append('city', pets.city);
      formData.append('sex', pets.sex);

      if (pets.category === 'lost/found' || pets.category === 'in good handle') {
        try {
          const request = new XMLHttpRequest();
          await request.open('POST', formData, 'https://localhost:3000/api/pets');
        
          pets.category === 'lost/found' ? navigate('Notice/lost/found') : navigate('Notice/in good handle')
          // resetForm();
        } catch (error) {
          return error.message;
        }
      }
    
   
      formData.append('price', pets.price);

      if (pets.category === 'sell') {
        try {
          const request = new XMLHttpRequest();
          await request.open('POST', formData, 'https://localhost:3000/api/pets');
        
          navigate('sell')
          // resetForm();
        } catch (error) {
          return error.message;
        }
      }
      const entries = Object.entries(formData);
      console.log(entries);

    };

    return (
      <Formik
        initialValues={initialPets}
        validationSchema={ValidSchema}
        onSubmit={handleSubmit}
      >
        {({ pets, touched, errors }) => (
          <Container>
            <Form
            // step={step} category={pets.category} autoComplete="off"
            >
              {step === 0 && <ChooseOption pets={pets} />}

              {step === 1 && (
                <PersonalDetals
                  step={1}
                  category={pets.category}
                  errors={errors}
                  touched={touched}
                />
              )}

              {step === 2 && (
                <MoreInfo
                  step={step}
                  category={pets.category}
                  petse={pets}
                  errors={errors}
                  // touched={touched}
                />
              )}

              <BtnBox>
                {step === 0 && (
                  <BtnNextDone
                    type="button"
                    onClick={e => {
                      // setTouched({});
                      handleClickNext(e);
                    }}
                  >
                    <BtnTitle>Next</BtnTitle>
                    {/* <BtnIcon/> */}
                  </BtnNextDone>
                )}
                {step === 1 && (
                  <BtnNextDone
                    type="button"
                    onClick={e => {
                      // setTouched({
                      //   name: true,
                      //   dateOfBirth: true,
                      //   breed: true,
                      //   title: true,
                      // });
                      handleClickNext(e);
                    }}
                  >
                    <BtnTitle>Next</BtnTitle>
                    {/* <BtnIcon/> */}
                  </BtnNextDone>
                )}
                {step === 2 && (
                  <BtnNextDone type="submit" onSubmit={handleSubmit}>
                    <LinkTitle>Done</LinkTitle>
                    {/* <BtnIcon /> */}
                  </BtnNextDone>
                )}
                <BtnCancelBack type="button" onClick={handleOnClick}>
                  {/* <BtnIcon/> */}
                  {step === 0 ? (
                    <LinkTitle>Cancel</LinkTitle>
                  ) : (
                    <LinkTitle>Back</LinkTitle>
                  )}
                </BtnCancelBack>
              </BtnBox>
            </Form>
          </Container>
        )}
      </Formik>
    );
  };
