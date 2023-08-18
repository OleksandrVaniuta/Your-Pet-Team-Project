import { Spin as Hamburger } from 'hamburger-react';
import { Wrapper } from './BurgerBtn.styled';

const BurgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        rounded
        label="Show menu"
        size={24}
        color="#FFC107"
        distance="lg"
        duration={0.7}
      />
    </Wrapper>
  );
};

export default BurgerButton;
