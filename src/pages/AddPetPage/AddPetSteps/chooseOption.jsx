import React from 'react';
 import { Field} from 'formik';
import {
  Container,
  CategoryForm,
  CheckedLabel,
} from '../Styles/chooseOption.styled';

import { AddHeader } from 'components/AddPetPage/AddPetSteps/addHeader';
// import { AddButtons } from './addButtons';

const categorieItem = [
  { item: 'your pet', id: 1 },
  { item: 'sell', id: 2 },
  { item: 'lost/found', id: 3 },
  { item: 'in good hands', id: 4 },
];

export const ChooseOption = ({ pets}) => {

  return (
    <Container>
      <AddHeader step={0} />
      <CategoryForm>
        {categorieItem.map(({ item, id }) => (
          <CheckedLabel id={id} >
            <Field
              type="radio"
              name="category"
              value={item}
              id={id}
              checked={(pets.category =  {item})}
            />
            {item}
          </CheckedLabel>
        ))}
      </CategoryForm>
    </Container>
  );
};

