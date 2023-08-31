import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useState, useEffect } from 'react';
import {
  ValidatePageTwo,
  ValidatePageTwoMyPet,
  ValidatePageSell,
} from '../ValidateAddPetPage/ValidateSchemaAdd';
import { AddPetHeader } from './addHeader';
import { Dog, Back, PhotoIcon, Female, Male } from './addIcon';

import {
  ContainerMore,
  ImgSexBox,
  LabelBox,
  TitleLabel,
  FieldInput,
  ImageBox,
  InputImage,
  Img,
  ImageTitle,
  SexLabel,
  FieldInputComments,
  SexBox,
  Label,
  SexTitle,
  SexFlex,
} from '../Styles/moreInfo.styled';
import {
  BtnBox,
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
} from '../Styles/button.styled';
import { Container } from '../addPetPage.styled';

const validateForm = category => {
  switch (category) {
    case 'your pet':
      return ValidatePageTwoMyPet;
    case 'sell':
      return ValidatePageSell;
    case 'lost-found':
      return ValidatePageTwo;
    case 'in-good-hands':
      return ValidatePageTwo;
    default:
      return ValidatePageTwo;
  }
};

export const MoreInfo = ({
  category,
  pets,
  handleFinalState,
  handleBack,
  handlePets,
  step,
}) => {
  const [imageURL, setImageURL] = useState('');
  const [petPhoto, setFile] = useState(pets.file);
  const [sex, setSex] = useState(pets.sex);
  const [price, setPrice] = useState(pets.price);
  const [city, setCity] = useState(pets.city);
  const [comments, setComments] = useState(pets.comments);

  useEffect(() => {
    if (petPhoto) {
      setImageURL(URL.createObjectURL(petPhoto));
    }
  }, [petPhoto]);

  const hebdleAddPhoto = e => {
    const photo = e.currentTarget.files[0];

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
    setImageURL(URL.createObjectURL(photo));

    handleFinalState(file);

    console.log(imageURL);
  };

  const handleSubmit = async (values, { validateForm }) => {
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {

      handleFinalState(values);

      const { sex, comments, city, price } = values;

      await handlePets(sex, comments, city, price);
    } else {
      console.log('Форма содержит ошибки', validationErrors);
    }
  };

  const handleChange = e => {
    setSex(e.target.value);
    handleFinalState({ sex: e.target.value });
  };

  const validate = validateForm(category);

  return (
    <Container category={category} step={step}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          sex: sex || pets.sex,
          price: price || pets.price,
          city: city || pets.city,
          comments: comments || pets.comments,
        }}
        validationSchema={validate}
        enableReinitialize={true}
      >
        {({ touched, errors }) => (
          <Form autoComplete="off">
            <AddPetHeader category={category} step={2} />
            <ContainerMore category={category}>
              <ImgSexBox>
                {category !== 'your pet' && (
                  <SexBox>
                    <SexTitle>The Sex</SexTitle>

                    <SexFlex>
                      <SexLabel checked={sex === 'female'}>
                        <Field
                          type="radio"
                          name="sex"
                          value="female"
                          checked={sex === 'female'}
                          onChange={handleChange}
                        />
                        <Female />
                        Female
                      </SexLabel>
                      <SexLabel checked={sex === 'male'}>
                        <Field
                          type="radio"
                          name="sex"
                          value="male"
                          checked={sex === 'male'}
                          onChange={handleChange}
                        />
                        <Male />
                        Male
                      </SexLabel>
                      <ErrorMessage name="sex" component="div" />
                    </SexFlex>
                  </SexBox>
                )}
                <ImageBox category={category}>
                  <ImageTitle category={category} step={step}>
                    {pets.file ? 'Add photo' : 'Load the pet’s image: '}
                  </ImageTitle>
                  <Img category={category}>
                    <InputImage
                      id="photo"
                      type="file"
                      name="photo"
                      accept="image/*,.png,.jpg,.gif,.web,"
                      hidden
                      multiple={false}
                      onChange={e => {
                        hebdleAddPhoto(e);
                      }}
                    />
                    {(imageURL && <img src={imageURL} alt="Pet" />) || (
                      <PhotoIcon />
                    )}
                  </Img>
                </ImageBox>
              </ImgSexBox>
              <LabelBox category={category} step={step}>
                {category !== 'your pet' && (
                  <Label>
                    <TitleLabel>Location</TitleLabel>
                    <FieldInput
                      id="city"
                      type="text"
                      name="city"
                      placeholder="New York"
                      required
                      onChange={e => {
                        setCity(e.target.value);
                        handleFinalState({ city: e.target.value });
                      }}
                      errors={touched.city && errors.city}
                    />
                    {touched.city && errors.name && <div>{errors.city}</div>}
                  </Label>
                )}
                {category === 'sell' && (
                  <Label>
                    <TitleLabel>Price</TitleLabel>
                    <FieldInput
                      id="price"
                      type="text"
                      name="price"
                      placeholder="00$"
                      onChange={e => {
                        setPrice(e.target.value);
                        handleFinalState({ price: e.target.value });
                      }}
                      errors={touched.price && errors.price}
                    />
                    {touched.price && errors.price && <div>{errors.price}</div>}
                  </Label>
                )}
                <Label category={category}>
                  <TitleLabel>Comments</TitleLabel>
                  <FieldInputComments
                    category={category}
                    as="textarea"
                    id="comments"
                    type="text"
                    name="comments"
                    rows="2"
                    placeholder="Some comments"
                    onChange={e => {
                      setComments(e.target.value);
                      handleFinalState({ comments: e.target.value });
                    }}
                    errors={touched.comments && errors.comments}
                  />
                  {touched.comments && errors.comments && (
                    <div>{errors.price}</div>
                  )}
                </Label>
              </LabelBox>
            </ContainerMore>
            <BtnBox>
              <BtnNextDone type="submit" aria-label="add">
                <BtnTitle>Done</BtnTitle>
                <Dog />
              </BtnNextDone>
              <BtnCancelBack
                type="button"
                aria-label="back"
                onClick={handleBack}
              >
                <Back />
                <LinkTitle>Back</LinkTitle>
              </BtnCancelBack>
            </BtnBox>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
