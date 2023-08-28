import styled from '@emotion/styled';
//  ${props => (props.edit ? '25px' : '59px')}

export const UserFormComtainer = styled.div`
  background-color: transparent;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1289px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 395px;
    max-width: 395px;
  }
`;

export const UserFormWraper = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  padding: 20px 8px 20px 8px;
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    padding: 20px 24px 20px 16px;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1289px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 20px 76px 16px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 24px 20px 16px;
    border-radius: 40px;
  }
`;

export const PhotoContainerWrapper = styled.div`
  @media screen and (max-width: 767px) {
    height: 241px;
  }

  @media screen and (min-width: 1280px) {
    height: 245px;
  }
`;

export const UserDataTitle = styled.h3`
  text-align: start;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 500;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;
