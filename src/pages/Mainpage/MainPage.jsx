import { useEffect } from 'react';

import { MainContainer, MainTitle, ImageContainer } from './MainPage.styled';

const MainPage = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <MainContainer>
      <MainTitle>Take good care of your small pets</MainTitle>
      <ImageContainer></ImageContainer>
    </MainContainer>
  );
};

export default MainPage;
