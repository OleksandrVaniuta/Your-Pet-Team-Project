import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const UserBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 24px;
  align-items: center;
`;

const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space[2] * 3 + 'px'};

  padding: ${({ theme }) => theme.space[2] * 3 + 'px'} 0;

  font-family: ${({ theme }) => theme.fonts.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 700;

  transition: color 350ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
  }

  & svg {
    stroke: ${({ theme }) => theme.colors.yellow};

    transition: stroke 350ms ${({ theme }) => theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export { Wrapper, UserBox };
