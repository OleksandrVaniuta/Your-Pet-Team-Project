import { Btn } from './AuthBtn.styled';

const AuthBtn = ({ path, text, icon }) => {
  return (
    <Btn to={path}>
      {text}
      {icon}
    </Btn>
  );
};

export default AuthBtn;
