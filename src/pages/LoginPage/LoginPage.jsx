import LoginForm from 'components/LoginForm/LoginForm';
import { LoginFormWrapper, LogInPage } from './LoginPage.styled';
import { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <LogInPage>
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
    </LogInPage>
  );
};

export default LoginPage;
