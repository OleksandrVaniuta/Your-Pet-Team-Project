import { useEffect } from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  RegisterPageWrapper,
  RegisterFormWrapper,
} from './RegisterPage.styled';

const RegisterPage = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <RegisterPageWrapper>
      <RegisterFormWrapper>
        <RegisterForm />
      </RegisterFormWrapper>
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
