import styled from '@emotion/styled';

export const UserPetsCOntainer = styled.div`
  width: 100%;
  padding-bottom: 30px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin: 0 auto;
    margin-top: 46px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 24px;
  }
`;
export const NoPetsMessageWrapper = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  padding: 40px 15px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.boxShadows.main};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    text-align: center;
    margin-right: 0;
    margin-top: 20px;
    padding: 50px 30px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    margin-top: 100px;
    margin-right: 20px;
    padding: 70px 40px;
  }
`;

export const NoPetParagraph = styled.p`
  margin-bottom: 30px;
`;
