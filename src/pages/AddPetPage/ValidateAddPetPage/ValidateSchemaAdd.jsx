import * as Yup from 'yup';
export const ValidSchema = Yup.object({
  category:Yup.string().required(),
  name: Yup.string().min(2).max(16).required('This field is required'),
  date: Yup.string('DD-MM-YYYY', 'Enter the date in DD-MM-YYYY format')
    .required('This field is required')
    .matches(/^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/),
  type: Yup.string().min(2).max(16).required('This field is required'),
  title: Yup.string()
    .min(2)
    .max(60, 'Too long, max 60 characters')
    .required('This field must be filled in!'),
  file: Yup.string('The file is too big, max 3MB').required(
    'This field is required'),
  sex: Yup.string('male' | 'female').required('Specify the gender of the pet'),
  location: Yup.string(/^[A-Z][a-z]+$/).required('This field is required'),
  comments: Yup.string('Too long, max 120 characters').max(120),
  price: Yup.number().min(0.1).required('This field is required'),
});




//Пернший крок My Pet 
export const ValidSchemaDetailsMyPet = Yup.object({
  name: Yup.string().min(2).max(16).required('This field is required'),
  date: Yup.string('DD-MM-YYYY', 'Enter the date in DD-MM-YYYY format')
    .required('This field is required')
    .matches(/^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/),
  type: Yup.string().min(2).max(16).required('This field is required'),
});
//Пернший крок об'ява 
export const ValidSchemaDetailsSell  =
  Yup.object({
    title: Yup.string()
      .min(2)
      .max(60, 'Too long, max 60 characters')
      .required('This field must be filled in!'),
    name: Yup.string()
      .min(2)
      .max(16, 'Too long, max 16 characters')
      .required('This field is required'),
    date: Yup.string(
      'DD-MM-YYYY',
      'Enter the date in DD-MM-YYYY format'
    ).required('This field is required').matches(
          /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/),
    type: Yup.string().min(2).max(16).required('This field is required'),
  });

//Другий крок My Pet
export const ValidSchemaMoreMyPet = Yup.object({
  file: Yup.string('The file is too big, max 3MB')
    .max(375000)
    .required('This field is required'),
  comments: Yup.string('Too long, max 120 characters').max(120),
});
//Другий крок продаж
export const ValidSchemaMoreSell = Yup.object({
  file: Yup.string('The file is too big, max 3MB').required(
    'This field is required'
  ),
  sex: Yup.string('male' | 'female').required('Specify the gender of the pet'),
  location: Yup.string(/^[A-Z][a-z]+$/).required('This field is required'),
  comments: Yup.string('Too long, max 120 characters').max(120),
  price: Yup.number().min(0.1).required('This field is required'),
});
//Другий крок не продаж
export const ValidSchemaMoreNoSell = Yup.object({
  file: Yup.string('The file is too big, max 3MB')
    .max(375000)
    .required('This field is required'),
  sex: Yup.string('male' | 'female').required('Specify the gender of the pet'),
  location: Yup.string(/^[A-Z][a-z]+$/).required('This field is required'),
  comments: Yup.string('Too long, max 120 characters').max(120),
});


