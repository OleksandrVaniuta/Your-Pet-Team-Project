import styled from '@emotion/styled';

export const UserPetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserPetsTitle = styled.h3`
  text-align: start;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 500;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1270px) {
    margin-top: 0;
  }
`;
