import styled from '@emotion/styled';

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 135px;
  max-height: 40px;
  padding: ${({ theme }) => theme.space[2] * 2 + 'px'} 0;
  border-radius: 40px;

  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  background-color: ${({ theme }) => theme.colors.blue};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.blue};
  border-style: solid;

  transition: color 300ms ${({ theme }) => theme.transition.main},
    background-color 300ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 30px;
    left: 10%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 25px;
    right: 27%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: static;
  }
`;
