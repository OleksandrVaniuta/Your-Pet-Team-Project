import React from 'react';
import {
  Container,
  CategoryForm,
  CheckedLabel,
} from '../Styles/chooseOption.styled';

import { AddHeader } from './addHeader';

import {
  // BtnBox,
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
} from '../Styles/button.styled';

export const ChooseOption = ({ category, setCategory, setStep }) => {
  const handleChange = evt => {
    setCategory(evt.target.value);
    console.log(category);
  };

  return (
    <Container>
      <AddHeader />
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
        <CheckedLabel checked={category === 'lost/found'}>
          <input
            type="radio"
            name="category"
            value="lost/found"
            checked={category === 'lost/found'}
            onChange={handleChange}
          />
          lost/found
        </CheckedLabel>
        <CheckedLabel checked={category === 'in good hands'}>
          <input
            type="radio"
            name="category"
            value="in good hands"
            checked={category === 'in good hands'}
            onChange={handleChange}
          />
          in good hands
        </CheckedLabel>
      </CategoryForm>
      <BtnNextDone
        type="button"
        onClick={() => {
          setCategory(category);
          console.log(category);
          setStep(state => {
            return state + 1;
          });
          // console.log(setStep);
        }}
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
    </Container>
  );
};

//   return (
//     <Container>
//       <AddHeader />
//       <CategoryForm role='group' >
//         {categoryItem.map(({ item, id }) => (
//           <CheckedLabel id={id} >
//             <Field
//               type="radio"
//               name="category"
//               value={item}
//               id={id}
//               // checked= {()=> handleChange}
//               // onClick={() => handleChange}
//               checked={(pets.category = { item })}
//             />
//             {item}
//           </CheckedLabel>
//         ))}
//       </CategoryForm>
//     </Container>
//   );
// };
