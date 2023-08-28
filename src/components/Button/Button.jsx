import { Btn } from './Button.styled';

const Button = ({ type, text, icon, clickHandler, filled, short, heart }) => {
  return (
    <Btn
      type={type}
      onClick={clickHandler}
      filled={filled}
      short={short}
      heart={heart}
    >
      {text}
      {icon}
    </Btn>
  );
};

export default Button;
