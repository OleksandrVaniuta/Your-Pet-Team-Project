import { ReactComponent as PawPrintIcon } from 'images/icons/pawprint.svg';
import React from 'react';
import {
  Image,
  ImageContainer,
  Title,
  Paragraph,
  BottomInfoWrapper,
  MainContainer,
  Button,
} from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <span>
        <Title>
          Ooops!
          <Paragraph> This page not found :(</Paragraph>
        </Title>
      </span>
      <ImageContainer>
        <Image alt="not found" />
      </ImageContainer>
      <BottomInfoWrapper>
        <Button type="button" onClick={() => navigate('')}>
          To main page
          <PawPrintIcon fill="white" />
        </Button>
      </BottomInfoWrapper>
    </MainContainer>
  );
}

export default NotFoundPage;
