import styled from '@emotion/styled';

import mainpagemobile from '../../images/mainpagebg/mainpagemobile.png';
import mainpagemobile2 from '../../images/mainpagebg/mainpagemobile.png';
import mainpagetablet from '../../images/mainpagebg/mainpagetablet.png';
import mainpagetablet2 from '../../images/mainpagebg/mainpagetablet2.png';
import mainpagedesktop from '../../images/mainpagebg/mainpagedesktop.png';
import mainpagedesktop2 from '../../images/mainpagebg/mainpagedesktop2.png';

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('${mainpagemobile}');
  background-size: contain;
  background-position: 0 100px;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${mainpagemobile2}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${mainpagetablet}');
    background-position: 0 180px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${mainpagetablet2}');
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url('${mainpagedesktop}');
    background-position: 450px -70px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${mainpagedesktop2}');
    }
  }
`;

const MainTitle = styled.h1`
  max-width: 280px;
  height: 100vh;
  padding-top: ${({ theme }) => theme.space[5] + 'px'};
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: 700;
  line-height: 1.38;
  color: #000000;
  text-align: left;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 588px;
    height: 200px;
    padding-top: ${({ theme }) => theme.space[6] + 16 + 'px'};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.47;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 501px;
    height: 264px;
    padding-top: ${({ theme }) => theme.space[6] + 111 + 'px'};
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.3;
  }
`;

export { MainContainer, MainTitle };
