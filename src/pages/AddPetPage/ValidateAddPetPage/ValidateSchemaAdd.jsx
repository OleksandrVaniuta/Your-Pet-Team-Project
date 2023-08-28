import * as Yup from 'yup';
export const ValidSchema = step => {
  let schema;
  if (step === 0) {
    schema = Yup.object().shape({
      category: Yup.string()
        .oneOf(['my-pet', 'sell', 'lost-found', 'for-free'])
        .required(),
    });
  }
  if (step === 1) {
    schema = Yup.object({
      category: Yup.string().required(),
      name: Yup.string().min(2).max(16).required('This field is required'),
      date: Yup.string('DD-MM-YYYY', 'Enter the date in DD-MM-YYYY format')
        .required('This field is required')
        .matches(/^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/),
      type: Yup.string().min(2).max(16).required('This field is required'),
      title: Yup.string()
        .min(2)
        .max(60, 'Too long, max 60 characters')
        .required('This field must be filled in!'),
    });
  }
  if (step === 2) {
    schema = Yup.object({
      file: Yup.string('The file is too big, max 3MB').required(
        'This field is required'
      ),
      sex: Yup.string('male' | 'female').required(
        'Specify the gender of the pet'
      ),
      location: Yup.string(/^[A-Z][a-z]+$/).required('This field is required'),
      comments: Yup.string('Too long, max 120 characters').max(120),
      price: Yup.number().min(0.1).required('This field is required'),
    });
  }
};
