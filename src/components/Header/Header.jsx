import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Logout from 'components/Logout/Logout';
import BurgerButton from '../BurgerBtn/BurgerBtn';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAuth, selectUser } from 'redux/Auth/AuthSelectors';
import { useWindowSize } from 'hooks/useResize';
import { HeaderWrapper, Wrapper, NavWrapper, Menu, Box } from './Header.styled';
import { useEffect } from 'react';

export const Header = () => {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth] = useWindowSize();
  const { isLoggedIn } = useSelector(selectAuth);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <HeaderWrapper>
      <Box>
        <Wrapper user={user}>
          <Logo />
          <NavWrapper>
            {isLoggedIn && (
              <UserMenu userName={user.name} showName={screenWidth >= 768} />
            )}
            {screenWidth >= 768 && !isLoggedIn && <AuthNav />}
            {screenWidth <= 1279 && (
              <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
            <Menu isOpen={isOpen} screenWidth={screenWidth}>
              {isLoggedIn && screenWidth <= 1279 && (
                <Logout setIsOpen={setIsOpen} />
              )}
              {screenWidth <= 767 && isLoggedIn && (
                <UserMenu userName={user.name} showName setIsOpen={setIsOpen} />
              )}
              {screenWidth < 768 && screenWidth <= 1279 && !isLoggedIn && (
                <AuthNav setIsOpen={setIsOpen} />
              )}
              <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            </Menu>
          </NavWrapper>
        </Wrapper>
      </Box>
    </HeaderWrapper>
  );
};
