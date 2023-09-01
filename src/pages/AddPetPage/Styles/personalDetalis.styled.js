import styled from '@emotion/styled';
import { Field } from 'formik';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
  margin-left: 8px;
  margin-reiht: 8px;
  margin-bottom: ${props => (props.category === 'your pet' ? 44 : 24)}px;
  @media screen and (min-width: 767px) {
    max-width: 395px;
  }
`;

export const TitleLabel = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
`;
export const Label = styled.label`
  position: relative;
`;
export const FieldInput = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
  outline: none;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${props => (props.errors ? '#f43f5e' : '#54ADFF')};
`;
