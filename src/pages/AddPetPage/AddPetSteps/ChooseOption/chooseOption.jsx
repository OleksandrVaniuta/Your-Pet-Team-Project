import React from 'react';
 import { Field} from 'formik';
import {
  Container,
  CategoryForm,
  CheckedLabel,
} from '../ChooseOption/chooseOption.styled';

import { AddHeader } from '../AddHeader/addHeader';

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
      <CategoryForm role="group">
        {categorieItem.map(({ item, id }) => (
          <CheckedLabel id={id}>
            <Field
              type="radio"
              name="category"
              value={item}
              id={id}
              checked={(pets.category = { item })}
            />
            {item}
          </CheckedLabel>
        ))}
      </CategoryForm>
    </Container>
  );
};

 