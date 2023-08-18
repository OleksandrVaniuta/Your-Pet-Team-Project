import { useEffect } from 'react';
import { navData } from './NavData';
import { useLocation } from 'react-router';
import { useWindowSize } from 'hooks/useResize';
import { List, Item, Link } from './Navigation.styled';

const Navigation = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const [screenWidth] = useWindowSize();

  useEffect(() => {
    if (screenWidth >= 1280) setIsOpen(false);
  }, [screenWidth, setIsOpen]);

  const items = navData.map(({ text, path }) => (
    <Item key={text} isOpen={isOpen}>
      <Link
        to={path}
        onClick={() => setIsOpen(false)}
        className={
          pathname.includes('notices') && path.includes('notices') && 'active'
        }
      >
        {text}
      </Link>
    </Item>
  ));

  return (
    <nav>
      <List>{items}</List>
    </nav>
  );
};

export default Navigation;
