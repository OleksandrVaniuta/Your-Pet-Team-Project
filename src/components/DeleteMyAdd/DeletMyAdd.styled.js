import styled from '@emotion/styled';

export const DltUserAddContainet = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cce4fb;
  flex-shrink: 0;
`;

export const DtlAddModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  text-align: center;
  margin-top: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
  }
`;

export const DltAddModalText = styled.p`
  max-width: 240px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;
  margin-top: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 393px;
    margin-top: 40px;
    font-size: 16px;
    line-height: 22px;
  }
`;
