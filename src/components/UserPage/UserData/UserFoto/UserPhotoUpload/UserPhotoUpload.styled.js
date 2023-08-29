import styled from '@emotion/styled';
import { Form } from 'formik';

export const PhotoForm = styled(Form)`
  padding: 0;
  width: 140px;
  height: 24px;
  margin: 0 auto;
  margin-top: 14px;
`;

export const LabelPhoto = styled.label`
  display: inline-block;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: background-color 0.3s;
  &:hover {
    scale: 1.01;
  }
`;

export const InputPhoto = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(50%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  margin-top: -18px;
  margin-right: 16px;
  margin-left: auto;
  width: 85px;
  margin-bottom: 0;
`;

export const EditPhoto = styled.span`
  padding: 0;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: '#000';
`;

export const ErrorMsgText = styled.div`
  color: #ff0000;
  position: relative;
  width: 200px;
  margin-left: -25px;
`;
