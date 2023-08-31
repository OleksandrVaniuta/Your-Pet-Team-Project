import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CategoryForm, CheckedLabel } from '../Styles/choosOptions.styled';

import { AddPetHeader } from './addHeader';
import { Dog, Back } from './addIcon';
import {
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
  BtnBox,
} from '../Styles/button.styled';

import { Container } from '../addPetPage.styled';

export const ChooseOption = ({ category, setCategory, setStep }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(location.state?.from);
  };

  const handleChange = evt => {
    setCategory(evt.target.value);
    console.log(category);
  };

  return (
    <Container>
      <AddPetHeader step={0} />
      <CategoryForm role="group">
        <CheckedLabel checked={category === 'your pet'}>
          <input
            type="radio"
            name="category"
            value="your pet"
            checked={category === 'your pet'}
            onChange={handleChange}
          />
          your pet
        </CheckedLabel>
        <CheckedLabel checked={category === 'sell'}>
          <input
            type="radio"
            name="category"
            value="sell"
            checked={category === 'sell'}
            onChange={handleChange}
          />
          sell
        </CheckedLabel>
        <CheckedLabel checked={category === 'lost-found'}>
          <input
            type="radio"
            name="category"
            value="lost-found"
            checked={category === 'lost-found'}
            onChange={handleChange}
          />
          lost/found
        </CheckedLabel>
        <CheckedLabel checked={category === 'in-good-hands'}>
          <input
            type="radio"
            name="category"
            value="in-good-hands"
            checked={category === 'in-good-hands'}
            onChange={handleChange}
          />
          in good hands
        </CheckedLabel>
      </CategoryForm>
      <BtnBox>
        <BtnNextDone
          type="button"
          onClick={() => {
            setCategory(category);
            console.log(category);
            setStep(state => {
              return state + 1;
            });
          }}
        >
          <BtnTitle>Next</BtnTitle>
          <Dog />
        </BtnNextDone>

        <BtnCancelBack type="button" onClick={goBack}>
          <Back />
          <LinkTitle>Back</LinkTitle>
        </BtnCancelBack>
      </BtnBox>
    </Container>
  );
};
