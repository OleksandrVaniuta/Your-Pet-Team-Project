import styled from '@emotion/styled';

export const UserPageContainer = styled.div`
  background-color: #fef9f9;
  padding: 0 ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-top: 40px;
  padding-bottom: 150px;
  @media screen and (max-width: 767px) {
    padding-top: 60px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.space[5] + 'px'};
  }

  @media screen and (min-width: 1280px) {
    padding: 0 ${({ theme }) => theme.space[4] + 'px'};
    padding-top: 62px;
    display: flex;
  }
`;

export const UserWrapper = styled.div`
  background-color: #fef9f9;
`;
