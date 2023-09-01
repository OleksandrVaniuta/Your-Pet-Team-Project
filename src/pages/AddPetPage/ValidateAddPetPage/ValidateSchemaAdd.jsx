import * as Yup from 'yup';

export const ValidateSchemaAdd = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
  date: Yup.string()
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/,

      'Invalid date format'
    )
    .required('Required'),
  type: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
});

export const ValidateSchemaMyPet = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
  date: Yup.string()
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/,

      'Invalid date format'
    )
    .required('Required'),
  type: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ValidatePageSell = Yup.object().shape({
  sex: Yup.mixed().oneOf(['male', 'female']).required('Required field!'),
  city: Yup.string()
    .min(3, 'Minimum 5 characters!')
    .max(60, 'Maximum 60 characters!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required field!'),
  comments: Yup.string()
    .min(4, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!'),
  price: Yup.string().matches(/^[1-9]\d*([,.]\d+)?$/, 'Price must be a number'),
  // file: Yup.mixed()
  //   .required('Image is required')
  //   .test(
  //     'photo',
  //     'photo size must be less then 3mb',
  //     file => file && file.size <= 375000
  //   ),
});

export const ValidatePageTwoMyPet = Yup.object().shape({
  comments: Yup.string()
    .min(3, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
});

export const ValidatePageTwo = Yup.object().shape({
  sex: Yup.mixed().oneOf(['male', 'female']).required('Required field!'),
  city: Yup.string()
    .min(4, 'Minimum 5 characters!')
    .max(60, 'Maximum 60 characters!')
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required field!'),
  comments: Yup.string()
    .min(3, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!'),
});
