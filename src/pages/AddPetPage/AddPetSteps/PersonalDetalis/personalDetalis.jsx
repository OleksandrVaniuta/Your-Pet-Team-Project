import { Field } from 'formik';
import { AddHeader } from '../AddHeader/addHeader';
import {
  Container,
  InputBox,
  TitleLabel,
  Input,
} from '../PersonalDetalis/personalDetalis.styled';

export const PersonalDetals = ({ pets, step, errors, touched }) => {
  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   switch (name) {
  //     case 'title':
  //       setTitle(value);
  //       break;
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'date':
  //       setDate(value);
  //       break;
  //     case 'type':
  //       setType(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   onSubmit({ title, name, date, type })
  //   navigate('MoreInfo');
  // };

  return (
    <Container>
      <AddHeader category={pets.category} step={1} />

      <InputBox category={pets.category}>
        {pets.category !== 'your pet' && (
          <Field>
            <TitleLabel>Title of add</TitleLabel>
            <Input
              type="text"
              value={pets.title}
              // onChange={handleChange}
              placeholder="Add title"
              name="title"
              errors={touched.title && errors.title}
            />
            {touched.title && errors.title && <div>{errors.title}</div>}
          </Field>
        )}
        <Field>
          <TitleLabel>Pet`s name</TitleLabel>
          <Input
            type="text"
            value={pets.name}
            // onChange={handleChange}
            placeholder="Type name pet"
            name="name"
            errors={touched.name && errors.name}
          />
          {touched.name && errors.name && <div>{errors.name}</div>}
        </Field>
        <Field>
          <TitleLabel>Date of birth</TitleLabel>
          <Input
            type="text"
            value={pets.date}
            // onChange={handleChange}
            placeholder="Date of birth, DD-MM-YYYY"
            name="date"
            errors={touched.date && errors.date}
          />
          {touched.date && errors.date && <div>{errors.date}</div>}
        </Field>
        <Field>
          <TitleLabel>Type</TitleLabel>
          <Input
            type="text"
            value={pets.type}
            // onChange={handleChange}
            placeholder="Type of pet"
            name="type"
            errors={touched.type && errors.type}
          />
          {touched.type && errors.type && <div>{errors.type}</div>}
        </Field>
      </InputBox>
    </Container>
  );
};
