import { Field } from 'formik';
import styled from '@emotion/styled';

export const UserInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.last ? '0' : '16px')};

  @media screen and (min-width: 390px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 481px) {
    justify-content: space-between;
    margin-bottom: ${props => (props.last ? '0' : '10px')};
  }
`;

export const UserInputTitle = styled.h3`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: 0.04em;
  font-family: Manrope;

  @media screen and (min-width: 390px) {
    font-size: 18px;
  }
`;

export const UserInput = styled(Field)`
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: #111111;
  font-family: 'Manrope', sans-serif;
  outline: none;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 20px;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blue)};

  @media screen and (min-width: 320px) {
    width: 190px;
    height: 24px;
  }

  @media screen and (min-width: 390px) {
    width: 255px;
    height: 30px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 255px;
    height: 30px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserInputBtn = styled.button`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: #fef9f9;
  background: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.blue};
  margin-top: 21px;
  border-radius: 40px;
  width: 100%;
  height: 31px;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }

  @media screen and (min-width: 320px) {
    width: 248px;
  }

  @media screen and (min-width: 390px) {
    width: 255px;
    height: 34px;
    font-size: 17px;
  }

  @media screen and (min-width: 768px) {
    width: 255px;
    height: 34px;
    margin-top: 10px;
    font-size: 17px;
    margin-left: 100px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserInputValidateMsg = styled.div`
  color: #ff0000;
`;
