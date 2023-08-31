import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-width: calc(100vw - 40px);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: calc(100vw - 160px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 608px;
    height: 354px;
  }
`;
export const Header = styled.p`
  font-family: ${({ theme }) => theme.fonts.main.medium};
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  margin-bottom: 44px;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 48px;
    font-size: 36px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 36px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
  > :first-of-type {
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: 0;
    > :first-of-type {
      margin-right: 17px;
      margin-bottom: 0;
    }
  }
`;
