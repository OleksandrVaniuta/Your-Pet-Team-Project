import styled from '@emotion/styled';

import mobile from '../../images/notfound/notfound_mobile@2x.jpg';
import tablet from '../../images/notfound/notfound_tablet.jpg';
import desktop from '../../images/notfound/notfound_desktop@2x.jpg';

export const MainContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  margin-top: 80px;
  display: block;
  align-items: center;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const Paragraph = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    text-align: inherit;
    margin-left: 10px;
  }

  @media (min-width: 1280px) {
    display: flex;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Image = styled.img`
  width: 280px;
  height: 123px;
  content: url('${mobile}');

  @media (min-width: 768px) {
    content: url('${tablet}');
    width: 704px;
    height: 308px;
  }
  @media (min-width: 1280px) {
    content: url('${desktop}');
    width: 822px;
    height: 360px;
  }
`;

export const BottomInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
  @media (min-width: 1280px) {
    margin-top: 18px;
  }
`;

export const Button = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 248px;
  height: 40px;
  padding: ${({ theme }) => theme.space[2] * 2 + 'px'} 0;
  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.blue};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;
  border-radius: 40px;

  z-index: 2;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    background-color: transparent};
  }

`;
