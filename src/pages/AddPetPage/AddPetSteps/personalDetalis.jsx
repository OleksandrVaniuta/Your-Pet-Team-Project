import { Field} from 'formik';
import { useState,  } from 'react';
import {  useNavigate } from 'react-router-dom';

import {  AddHeader} from 'components/AddPetPage/AddPetSteps/addHeader';
 import {ValidSchema} from '../ValidateAddPetPage/ValidateSchemaAdd';

import {
  Container,
 InputBox,
  TitleLabel,
  Label,
  Input,
  Form,
} from '../Styles/personalDetalis.styled';

// import { AddButtons } from './addButtons';

export const PersonalDetals = ({pets, step, errors, touched }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        return;
    }
  };

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   onSubmit({ title, name, date, type })
  //   navigate('MoreInfo');
  // };

  return (
    <Container>
      <AddHeader category={pets.category} step={step} />
     
          <InputBox category ={pets.category}>
            {pets.category !== 'your pet' && (
              <Field>
                <TitleLabel>Title of add</TitleLabel>
                <Input
                  type="text"
                  // value={title}
                  // onChange={handleChange}
                  placeholder="Add title"
                  name="title"
                />
              </Field>
            )}
            <Field>
              <TitleLabel>Pet`s name</TitleLabel>
              <Input
                type="text"
                // value={name}
                // onChange={handleChange}
                placeholder="Type name pet"
                name="name"
              />
              {/* {errors.name && <div >{ErrorMessage.name}</div>} */}
            </Field>
            <Field>
              <TitleLabel>Date of birth</TitleLabel>
              <Input
                type="text"
                // value={date}
                // onChange={handleChange}
                placeholder="Date of birth, DD-MM-YYYY"
                name="date"
              />
              {/* {errors.date && <div id="feedback">{ErrorMessage.date}</div>} */}
            </Field>
            <Field>
              <TitleLabel>Type</TitleLabel>
              <Input
                type="text"
                // value={type}
                // onChange={handleChange}
                placeholder="Type of pet"
                name="type"
              />
              {/* {errors.type && <div id="feedback">{ErrorMessage.type}</div>} */}
            </Field>
          </InputBox>
       
    </Container>
  );
};

 
