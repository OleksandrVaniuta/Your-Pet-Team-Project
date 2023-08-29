import styled from '@emotion/styled';
import { Field} from 'formik';
export const Container = styled.div``;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 264px;
  maxheight: 314px;
  gap: 20px;
  margin-bottom: 95px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 137px;
    maxheight: 648px;
    width: 458px;
  }
`;

// margin-bottom: ${props => (props.category === 'your pet' ? 44 : 24)}px;

export const TitleLabel = styled.p`
  margin: 0px;
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
`;
export const Label = styled.label`
  gap: 4px;
  text-align: start;
  // width: 264px;
  height: 63px;
  @media screen and (min-width: 767px) {
    gap: 8px;
    //   width: 394px;
    height: 83px;
  }
`;
export const FieldInput = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  outline: none;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${props => (props.errors ? '#f43f5e' : '#54ADFF')};

  border-color: ${props => (props.focus ? 'green' : '#54ADFF')};
`;
