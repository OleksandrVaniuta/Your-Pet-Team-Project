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
  background: #ffffff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const BtnNextDone = styled.button`
  display: flex;
  width: 248px;
  height: 40px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 40px;
  background: #54adff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in-out;
    background-size: 100% 100%, cover;
    transform: scale(1.05);
  }

  :disabled {
    opacity: 0.5;
  }
`;
export const BtnTitle = styled.p`
  color: #fef9f9;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
 
`;
export const LinkTitle = styled.p`
  color: #54adff;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  
`;
