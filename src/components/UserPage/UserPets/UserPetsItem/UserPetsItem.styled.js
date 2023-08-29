import styled from '@emotion/styled';

export const PetItemCintainer = styled.li`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  margin-bottom: 20px;
  padding: 16px 20px 40px 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;

    align-items: start;
    padding: 20px 20px 20px 20px;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 28px 20px 20px;
    margin-bottom: 20px;
  }
`;

export const PhotoContainer = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 40px;
  margin-botton: 20px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 390px) {
  }

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
  }
`;

export const PetInfo = styled.div`
  text-align: left;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 240px;
    margin: 0 auto;
  }

  @media screen and (min-width: 390px) {
  }

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 32px;
  }
`;

export const PetDescr = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: ${props => (props.last ? '0' : '16px')};

  @media screen and (min-width: 390px) {
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.last ? '0' : '12px')};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 0.04em;
    color: #111111;
    margin-bottom: ${props => (props.last ? '0' : '16px')};
  }
`;

export const PetDecrStyled = styled.span`
  font-weight: 600;
  padding-right: 5px;
`;
