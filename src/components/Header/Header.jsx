// import { Navigation } from '../Navigation/Navigation';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { UserMenu } from '../UserMenu/UserMenu';

// export const Header = () => {
//   const isLogedIn = true;

//   return (
//     <header>
//       <Navigation />
//       {isLogedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import BurgerButton from '../BurgerBtn/BurgerBtn';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAuth } from 'redux/Auth/AuthSelectors';
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
// import { useSelector } from 'react-redux';1
// import { selectUser, selectAuth } from 'redux/auth/selectors';
import { useWindowSize } from 'hooks/useResize';
import { HeaderWrapper, Wrapper, NavWrapper, Menu } from './Header.styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth] = useWindowSize();
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavWrapper>
            {isLoggedIn && <UserMenu showName={screenWidth >= 768} />}
            {screenWidth >= 768 && !isLoggedIn && <AuthNav />}
            {screenWidth <= 1279 && (
              <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            <Menu isOpen={isOpen} screenWidth={screenWidth}>
              {screenWidth <= 767 && isLoggedIn && (
                <UserMenu showName setIsOpen={setIsOpen} />
              )}
              {screenWidth < 768 && screenWidth <= 1279 && !isLoggedIn && (
                <AuthNav setIsOpen={setIsOpen} />
              )}
              <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            </Menu>
          </NavWrapper>
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};
