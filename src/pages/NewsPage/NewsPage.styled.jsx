import styled from '@emotion/styled';

export const NewsWrapper = styled.div`
  background-color: #fef9f9;
  padding: 0 ${({ theme }) => theme.space[2] * 5 + 'px'};

  @media screen and (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.space[5] + 'px'};
  }

  @media screen and (min-width: 1280px) {
    padding: 0 ${({ theme }) => theme.space[4] + 'px'};
  }
`;
