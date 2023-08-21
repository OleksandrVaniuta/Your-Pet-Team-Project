import styled from '@emotion/styled';

const MainContainer = styled.div``;

const MainTitle = styled.h1`
  max-width: 280px;
  height: 88px;
  margin-top: ${({ theme }) => theme.space[5] + 'px'};
  font-family: ${({ theme }) => theme.fonts.main.bold};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  line-height: 1.38;
  color: #000000;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 588px;
    height: 200px;
    margin-top: ${({ theme }) => theme.space[6] + 16 + 'px'};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.47;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 501px;
    height: 264px;
    margin-top: ${({ theme }) => theme.space[6] + 111 + 'px'};
    font-family: ${({ theme }) => theme.fonts.main.extraBold};
    font-size: ${({ theme }) => theme.fontSizes[8]};
    line-height: 1.3;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: visible;
  margin: 30px auto 0;
  width: 320px;
  height: 390px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 820px;
    width: 768px;
    margin-top: 20px;
    margin-left: -30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 0;
    width: 917px;
    height: 570px;
    top: 180px;
  }
`;

export { MainContainer, MainTitle, ImageContainer };
