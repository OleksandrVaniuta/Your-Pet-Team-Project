import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../Header/Header';

// import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

import { ContentWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <ContentWrapper>
      <Header />
      <main>
        <Section>
          {/* <Container> */}
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          {/* </Container> */}
        </Section>
      </main>
    </ContentWrapper>
  );
};
