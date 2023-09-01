import styled from '@emotion/styled';

export const TitlePage = styled.h2`
  text-align: center;

  @media screen and (max-width: 747.98px) {
    font-size: 24px;
    padding-top: 40px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 748px) {
    font-size: 48px;
    padding-bottom: 40px;
    padding-top: 80px;
  }
`;

export const FriendsWrapper = styled.div`
  background-color: #fef9f9;
  padding-bottom: 75px;

@media screen and (min-width: 748px) {
  padding-bottom: 170px;
}

@media screen and (min-width: 1280px) {
  padding-bottom: 69px;
}
`;
