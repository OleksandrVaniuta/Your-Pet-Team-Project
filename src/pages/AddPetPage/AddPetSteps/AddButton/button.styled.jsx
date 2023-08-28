import styled from '@emotion/styled';

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    gap: 32px;
  }
`;

export const BtnCancelBack = styled.button`
  display: flex;
    gap: 12px;
  height: 17px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  text-decoration-line: underline;
  cursor:  pointer;
`;

export const BtnNextDone = styled.button`
  position: relative;
  display: flex;
  width: 248px;
  height: 40px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue};
  text-decoration-line: underline;
`;
export const BtnTitle = styled.p`
  color: #fef9f9;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  text-decoration-line: underline;
`;
export const LinkTitle = styled.p`
  color: ${({ theme }) => theme.colors.blue};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  text-decoration-line: underline;
`;
