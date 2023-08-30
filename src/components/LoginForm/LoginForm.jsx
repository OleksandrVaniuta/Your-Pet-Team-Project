import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { login, refresh } from 'redux/Auth/AuthOperations';
import { selectError } from 'redux/Auth/AuthSelectors';
import { toast } from 'react-toastify';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import {
  LogInForm,
  LogInFormTitle,
  LogInFormEmailContainer,
  LogInFormEmailInputContainer,
  LogInFormInput,
  ErrorIcon,
  LogInFormPasswordContainer,
  LogInFormPasswordInputContainer,
  ErrorMessage,
  PasswordIcon,
  EyeIcon,
  LogInBtn,
  RegisterText,
  RegisterLink,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const fieldValidation = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Enter a valid Email';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  }

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginError = useSelector(selectError);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await dispatch(login(values));

      dispatch(refresh());
    } catch (error) {
      console.log(error.message);
      toast.error(loginError);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={fieldValidation}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        setErrors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
      }) => {
        const handleFieldChange = e => {
          const { name } = e.target;
          setErrors({ ...errors, [name]: '' });
          handleChange(e);
        };

        return (
          <LogInForm onSubmit={handleSubmit}>
            <LogInFormTitle>Log In</LogInFormTitle>
            <LogInFormEmailContainer error={errors.email && touched.email}>
              <LogInFormEmailInputContainer
                error={errors.email && touched.email}
                style={{
                  borderColor:
                    errors.email && touched.email ? '#F43F5E' : '#54ADFF',
                }}
              >
                <LogInFormInput
                  type="string"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                {errors.email && touched.email && values.email && (
                  <ErrorIcon
                    onClick={() => {
                      resetForm({ values: { ...values, email: '' } });
                    }}
                  >
                    <CloseOutlinedIcon />
                  </ErrorIcon>
                )}
              </LogInFormEmailInputContainer>

              {errors.email && touched.email && (
                <ErrorMessage name="email">{errors.email}</ErrorMessage>
              )}
            </LogInFormEmailContainer>

            <LogInFormPasswordContainer
              error={errors.password && touched.password}
            >
              <LogInFormPasswordInputContainer
                error={errors.password && touched.password}
                style={{
                  borderColor:
                    errors.password && touched.password ? '#F43F5E' : '#54ADFF',
                }}
              >
                <LogInFormInput
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleFieldChange}
                  onBlur={handleBlur}
                  disabled={loading}
                />
                <PasswordIcon onClick={togglePasswordVisibility}>
                  <EyeIcon error={errors.password && touched.password}>
                    {showPassword ? (
                      <RemoveRedEyeOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </EyeIcon>
                </PasswordIcon>
              </LogInFormPasswordInputContainer>

              {errors.password && touched.password && (
                <ErrorMessage name="password">{errors.password}</ErrorMessage>
              )}
            </LogInFormPasswordContainer>

            <LogInBtn type="submit" disabled={isSubmitting || loading}>
              Log In
            </LogInBtn>
            <RegisterText>
              Don't have an account?{' '}
              <RegisterLink to={'/register'}>Register</RegisterLink>
            </RegisterText>
          </LogInForm>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
