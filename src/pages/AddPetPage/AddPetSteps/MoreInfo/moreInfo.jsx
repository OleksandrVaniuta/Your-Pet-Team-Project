import { Field } from 'formik';
import { AddHeader } from '../AddHeader/addHeader';
import {
  Container,
  Forma,
  TitleLabel,
  Input,
  ImageBox,
  InputImage,
  SexLabel,
  InputComments,
  SexBox,
  SexInput,
  SexTitle,
  Male, Female, Photo
} from '../MoreInfo/moreInfo.styled';
import photo from '../../iconAdd/photo.svg';
import male from '../../iconAdd/male.svg';
import female from '../../iconAdd/female.svg';

export const MoreInfo = ({ step, pets, errors, touched }) => {
  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   switch (name) {
  //     case 'sex':
  //       setSex(value);
  //       break;
  //     case 'city':
  //       setCity(value);
  //       break;
  //     case 'file':
  //       setFile(value);
  //       break;
  //     case 'price':
  //       setPrice(value);
  //       break;
  //     case 'comments':
  //       setComments(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = async evt => {
  //   evt.preventDefault();
  //   onSubmit({price, city, comments, file, sex})
  // };

  return (
    <Container>
      <AddHeader category={pets.category} step={2} />
      <Forma category={pets.category} step={step}>
        <form
          autoComplete="off"
          // onSubmit={handleSubmit}
        >
          {pets.category !== 'your pet' && (
            <SexBox>
              <SexTitle>The sex</SexTitle>
              <SexLabel checked={pets.sex === 'Female'}>
                <SexInput
                  type="radio"
                  name="sex"
                  value="Female"
                  checked={pets.sex === 'Female'}
                  // onChange={handleChange}
                />
                <Female
                  src={female}
                  sx={[
                    {
                      width: 24,
                      height: 24,
                      color: '#F43F5E',
                    },
                  ]}
                />
                Female
              </SexLabel>
              <SexLabel checked={pets.sex === 'Male'}>
                <SexInput
                  type="radio"
                  name="sex"
                  value="Male"
                  checked={pets.sex === 'Male'}
                  // onChange={handleChange}
                />{' '}
                <Male
                  src={male}
                  sx={[
                    {
                      width: 24,
                      height: 24,
                      color: '#00C3AD',
                    },
                  ]}
                />
                Male
              </SexLabel>
            </SexBox>
          )}
          <ImageBox>
            {pets.file ? 'Add foto' : 'Load the pets image'}
            <TitleLabel>
              {!pets.file ? (
                <Photo
                  src={photo}
                  sx={[
                    {
                      width: 182,
                      height: 182,
                      color: '#54ADFF',
                    },
                  ]}
                />
              ) : (
                <image src={URL.createObjectURL(pets.file)} alt="pet" />
              )}
              <InputImage
                type="file"
                name="file"
                // value={file}
                // onChange={handleChange}
                multiple={false}
                accept=".png, .jpg"
                hidden
                errors={touched.file && errors.file}
              />
              {touched.file && errors.file && <div>{errors.file}</div>}
            </TitleLabel>
          </ImageBox>
          {pets.category !== 'your pet' && (
            <Field>
              <TitleLabel>Location</TitleLabel>
              <Input
                type="text"
                // value={city}
                placeholder="City"
                name="city"
                // onChange={handleChange}
                errors={touched.city && errors.city}
              />
              {touched.city && errors.name && <div>{errors.city}</div>}
            </Field>
          )}
          {pets.category === 'sell' && (
            <Field>
              <TitleLabel>Price</TitleLabel>
              <Input
                type="number"
                // value={price}
                placeholder="Price"
                name="price"
                // onChange={handleChange}
                errors={touched.price && errors.price}
              />
              {touched.price && errors.price && <div>{errors.price}</div>}
            </Field>
          )}
          <Field>
            <TitleLabel>Comments</TitleLabel>
            <InputComments
              type="text"
              // value={comments}
              // onChange={handleChange}
              placeholder="Type of pet"
              name="comments"
              errors={touched.comments && errors.comments}
            />
            {touched.comments && errors.comments && (
              <div>{errors.comments}</div>
            )}
          </Field>
        </form>
      </Forma>
    </Container>
  );
};
