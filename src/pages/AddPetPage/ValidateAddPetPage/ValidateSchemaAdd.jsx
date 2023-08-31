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
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
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
    .test('is-capitalized', 'Name must start with a capital letter', value => {
      if (value) {
        return /^[A-Z]/.test(value);
      }
      return true;
    })
    .required('Required'),
});

export const ValidatePageSell = Yup.object().shape({
  sex: Yup.mixed().oneOf(['male', 'female']).required('Required field!'),
  city: Yup.string()
    .min(5, 'Minimum 5 characters!')
    .max(60, 'Maximum 60 characters!')
    .required('Required field!'),
  comments: Yup.string()
    .min(8, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
  price: Yup.string().matches(/^[1-9]\d*([,.]\d+)?$/, 'Price must be a number'),
});

export const ValidatePageTwoMyPet = Yup.object().shape({
  comments: Yup.string()
    .min(8, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
});

export const ValidatePageTwo = Yup.object().shape({
  sex: Yup.mixed().oneOf(['male', 'female']).required('Required field!'),
  city: Yup.string()
    .min(5, 'Minimum 5 characters!')
    .max(60, 'Maximum 60 characters!')
    .required('Required field!'),
  comments: Yup.string()
    .min(8, 'Minimum 8 characters!')
    .max(120, 'Maximum 120 characters!')
    .required('Required field!'),
});

// export const ValidSchema = (step) => {
//   let schema;
//   if (step === 0) {
//     schema = Yup.object().shape({
//       category: Yup.string()
//         .oneOf(['my-pet', 'sell', 'lost-found', 'in good handle'])
//         .required(),
//     });
//   }
//   if (step === 1) {

//     schema = Yup.object({
//       category: Yup.string().required(),
//       name: Yup.string().min(2).max(16).required('This field is required'),
//       date: Yup.string('DD-MM-YYYY', 'Enter the date in DD-MM-YYYY format')
//         .required('This field is required')
//         .matches(/^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/),
//       type: Yup.string().min(2).max(16).required('This field is required'),
//       title: Yup.string()
//         .min(2)
//         .max(60, 'Too long, max 60 characters')
//         .required('This field must be filled in!'),
//     })
//   }
//   if (step === 2) {
//     schema = Yup.object({
//       file: Yup.string('The file is too big, max 3MB').required(
//         'This field is required'),
//       sex: Yup.string('male' | 'female').required('Specify the gender of the pet'),
//       location: Yup.string(/^[A-Z][a-z]+$/).required('This field is required'),
//       comments: Yup.string('Too long, max 120 characters').max(120),
//       price: Yup.number().min(0.1).required('This field is required'),
//     });

//   }
