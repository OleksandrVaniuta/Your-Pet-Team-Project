import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  InputPhoto,
  LabelPhoto,
  EditPhoto,
  PhotoForm,
  ErrorMsgText,
} from './UserPhotoUpload.styled';
import { useState } from 'react';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

const validationSchema = Yup.object().shape({
  fileInput: Yup.mixed()
    .required('Please select a file')
    .test('fileType', 'Unsupported File Format', value => {
      if (!value) return false;

      const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
      return supportedFormats.includes(value.type);
    })
    .test('fileSize', 'File size is too large', value => {
      if (!value) return false;

      const maxSize = 3 * 1024 * 1024;
      return value.size <= maxSize;
    }),
});

export default function UserPhotoUpload({ setFile, uploaded }) {
  const [erroMsg, setErrorMsg] = useState('');

  const handleSubmit = e => {
    const file = e.currentTarget.files[0];
    if (file.size > 375000) {
      console.log('to large');
      setErrorMsg('File size is too large');
      return;
    }
    const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    const fileType = file.type;
    if (!supportedFormats.includes(fileType)) {
      setErrorMsg('Unsupported File Format');
      console.log('Unsupported File Format');

      return;
    }
    setErrorMsg('');
    setFile(file);
    uploaded(true);
  };
  // const reader = new FileReader()
  return (
    <Formik
      initialValues={{
        fileInput: null,
      }}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {() => (
        <PhotoForm>
          <div>
            <LabelPhoto htmlFor="fileInput">
              <PhotoCameraOutlinedIcon
                sx={[
                  {
                    fontSize: 24,
                    color: '#54ADFF',
                    verticalAlign: 'middle',
                    marginRight: '11px',
                  },
                ]}
              />

              <EditPhoto>Edit Photo</EditPhoto>
              <InputPhoto
                type="file"
                name="fileInput"
                id="fileInput"
                ccept="image/*,.png,.jpg,"
                validate={validationSchema}
                onChange={handleSubmit}
              />
            </LabelPhoto>
            {erroMsg && <ErrorMsgText>{erroMsg}</ErrorMsgText>}
          </div>
        </PhotoForm>
      )}
    </Formik>
  );
}
