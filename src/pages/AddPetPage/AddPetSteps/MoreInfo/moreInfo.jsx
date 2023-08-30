import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import { ValidatePageTwo } from '../../ValidateAddPetPage/ValidateSchemaAdd';
import { AddPetHeader } from '../AddHeader/addHeader';
import { Dog, Back, PhotoIcon, Female, Male } from '../AddIcons/addIcon';
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
} from '../MoreInfo/moreInfo.styled';
import {
  BtnBox,
  BtnNextDone,
  BtnCancelBack,
  BtnTitle,
  LinkTitle,
} from '../../Styles/button.styled';
import { Container } from '../../Styles/addPetPage.styled';

export const MoreInfo = ({
  category,
  pets,
  handleFinalState,
  handleBack,
  handlePets,
  step,
}) => {
  const [imageURL, setImageURL] = useState('');
  const [petPhoto, setFile] = useState(null);
  const [sex, setSex] = useState();
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
    handleFinalState(file);
    setImageURL();
  };

  const handleSubmit = async (values, { validateForm }) => {
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);
      console.log(petPhoto);

      // handleFinalState(values);

      const { sex, comments, city, price } = values;
      await handlePets(sex, comments, city, price);
      console.log(pets);
    } else {
      console.log('Форма содержит ошибки', validationErrors);
    }
  };

  const handleChange = evt => {
    console.log(evt.target.value);
    setSex(evt.target.value);
  };

  return (
    <Container category={category} step={step}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          sex: pets.sex,
          price: pets.price,
          city: pets.city,
          comments: pets.comments,
        }}
        validationSchema={ValidatePageTwo}
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
                    {(imageURL && (
                      <img src={imageURL} alt="Pet" height={112} width={112} />
                    )) || (
                      <PhotoIcon
                      // fontSize: 50, color: '#54ADFF'
                      />
                    )}

                    <InputImage
                      id="photo"
                      type="file"
                      name="photo"
                      accept="image/*,.png,.jpg,.gif,.web,"
                      hidden
                      onChange={e => {
                        hebdleAddPhoto(e);
                      }}
                    />
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
                      errors={touched.city && errors.city}
                    />

                    {touched.city && errors.name && <div>{errors.price}</div>}
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
                    rows="1"
                    placeholder="Some comments"
                    required
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
