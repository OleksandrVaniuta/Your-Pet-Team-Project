import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { useWindowSize } from 'hooks/useResize';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import BtnScrollToTop from 'components/ScrollBtn/ScrollBtn';
import { useEffect } from 'react';

import { ContentWrapper, Main } from './Layout.styled';

export const Layout = () => {
  const [screenWidth, screenHeight] = useWindowSize();

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <ContentWrapper>
      <BtnScrollToTop />
      <Header />
      <Main screenHeight={screenHeight} screenWidth={screenWidth}>
        <Section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </ContentWrapper>
  );
};
