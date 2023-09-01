import styled from '@emotion/styled';

export const NoticesWrapper = styled.div`
  background-color: #fef9f9;
  padding: 0 ${({ theme }) => theme.space[2] * 5 + 'px'};
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 748px) {
    padding: 0 ${({ theme }) => theme.space[5] + 'px'};
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 ${({ theme }) => theme.space[4] + 'px'};
  }
`;
