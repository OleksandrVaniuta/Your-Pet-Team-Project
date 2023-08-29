import { ReactComponent as MaleIcon } from '../iconAdd/male.svg';
import { ReactComponent as FemaleIcon } from '../iconAdd/female.svg';

import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
// import { Photo } from '@mui/icons-material';

const schemaPageTwo = yup.object().shape({
  sex: yup.mixed().oneOf(['male', 'female']).required('Required field!'),
  city: yup
    .string()
    .min(5, 'Minimum 5 characters!')
    .max(60, 'Maximum 60 characters!')
    .required('Required field!'),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
  price: yup.string().matches(/^[1-9]\d*([,.]\d+)?$/, 'Price must be a number'),
});

export const MoreInfo = ({
  category,
  pets,
  handleFinalState,
  handleBack,
  handlePets,
}) => {
  const [imageURL, setImageURL] = useState('');
  const [petPhoto, setFile] = useState(null);
  console.log(category);

  const hebdleAddPhoto = e => {
    const photo = e.currentTarget.files[0];
    console.log(photo);
    if (photo.size > 375000) {
      console.log('to large');
      return;
    }

    const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    const fileType = photo.type;
    if (!supportedFormats.includes(fileType)) {
      console.log('Unsupported File Format');

      return;
    }
    setFile(photo);
    const file = { file: photo };
    handleFinalState(file);
    setImageURL();
  };

  const handleSubmit = async (values, { validateForm }) => {
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      console.log(petPhoto);

      handleFinalState(values);

      await handlePets();
      console.log(pets);
    } else {
      console.log('Форма содержит ошибки', validationErrors);
    }
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          sex: pets.sex,
          price: pets.price,
          city: pets.city,
          comments: pets.comments,
        }}
        validationSchema={schemaPageTwo}
      >
        <Form autoComplete="off">
          <label> The sex: </label>
          <div>
            <label>
              <span>
                <MaleIcon />
              </span>
              <Field type="radio" name="sex" value="male" />
              Male
            </label>
            <label>
              <span>
                <FemaleIcon />
              </span>
              <Field type="radio" name="sex" value="female" />
              Female
            </label>
            <ErrorMessage name="sex" component="div" />
          </div>

          <label htmlFor="city">
            Location:
            <Field
              id="city"
              type="text"
              name="city"
              placeholder="New York"
              required
            />
            <ErrorMessage name="city" component="div" />
          </label>

          {category === 'sell' && (
            <label htmlFor="price">
              Price:
              <Field id="price" type="text" name="price" placeholder="00$" />
              <ErrorMessage name="price" component="div" />
            </label>
          )}

          <label htmlFor="photo">Load the pet’s image</label>
          <label htmlFor="photo">
            <Field
              id="photo"
              type="file"
              name="photo"
              accept="image/*,.png,.jpg,.gif,.web,"
              onChange={e => {
                hebdleAddPhoto(e);
              }}
            />
            {imageURL && (
              <img src={imageURL} alt="Pet" height={116} width={116} />
            )}
          </label>

          <label htmlFor="comments">
            Comments
            <Field
              as="textarea"
              id="comments"
              type="text"
              name="comments"
              rows="1"
              placeholder="Some comments"
              required
            />
            <ErrorMessage name="comments" component="div" />
          </label>

          <div>
            <button type="submit" aria-label="add">
              Done
            </button>

            <button type="button" aria-label="back" onClick={handleBack}>
              Back
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
