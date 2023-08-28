import { Field } from 'formik';
import { AddHeader } from './addHeader';
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
  Icon
} from '../Styles/moreInfo.styled';
// import { AddButtons } from './addButtons';


export const MoreInfo = ({  step, pets, errors, touched }) => {


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
                Female
              </SexLabel>
              <SexLabel checked={pets.sex === 'Male'}>
                <SexInput
                  type="radio"
                  name="sex"
                  value="Male"
                  checked={pets.sex === 'Male'}
                  // onChange={handleChange}
                />
                Male
              </SexLabel>
            </SexBox>
          )}
          <ImageBox>
            {pets.file ? 'Add foto' : 'Load the pets image'}
            <TitleLabel>
              {!pets.file ? (
                <Icon alt="Photo" />
              ) : (
                <image src={URL.createObjectURL(pets.file)} alt="pet" />
              )}

              <InputImage
                type="file"
                name="file"
                // value={file}
                // onChange={handleChange}
                multiple={false}
                // accept=".png, .jpg"
                hidden
              />
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
              />
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
                required
              />
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
            />
          </Field>
        </form>
      </Forma>
    </Container>
  );
};
