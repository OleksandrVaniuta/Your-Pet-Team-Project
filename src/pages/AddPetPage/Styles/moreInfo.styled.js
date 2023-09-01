import styled from '@emotion/styled';
import { Field } from 'formik';

export const ContainerMore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: ${props =>
      props.category !== 'your pet' ? 'row' : 'column'};
    gap: ${props => (props.category !== 'your pet' ? '63px' : '24px')};

    margin-top: 16px;
    margin-bottom: 20px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;
export const ImgSexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 768px) {
    gap: 38x;
  }
`;
export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-top: 20px;
    width: ${props =>
      props.category !== 'your pet' && props.step === 2 ? '395px' : '100%'};
  }
`;

export const TitleLabel = styled.p`
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`;
export const Label = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: #111111;
`;
export const FieldInput = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  hiegth: 40px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  box-sizing: border-box;
  outline: none;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${props => (props.errors ? '#f43f5e' : '#54ADFF')};
  @media screen and (min-width: 767px) {
    hiegth: 48px;
  }
`;
export const ImageBox = styled.div`
  display: flex;
 left: 0;
  gap: 27px;
  margin-top: 16px;
  align-items: center;
  text-align: start;
   @media (min-width: 768px) {
  margin-top: 0;
   flex-direction: ${props =>
     props.category !== 'your pet' ? 'column' : 'row'};
     gap: ${props => (props.category !== 'your pet' ? '4px' : '27px')};
`;

export const Img = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media (min-width: 768px) {
      border-radius: 40px;
    }
  }
`;
export const InputImage = styled(Field)`
hidden;
`;
export const ImageTitle = styled.p`
  width: 81px;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  color: #111111;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    width: ${props =>
      props.category !== 'your pet' && props.step === 2 ? '200px' : '114px'};
  }
`;

export const FieldInputComments = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  padding: 9px 15px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
  height: 92px;
  outline: none;
  border-radius: 20px;
  color: #1111111;
  border-color: ${props => (props.errors ? '#f43f5e' : '#54ADFF')};
  @media (min-width: 768px) {
    height: ${props =>
      props.category === 'lost-found' || props.category === 'in-good-hands'
        ? '182px'
        : '79px'};
  }
`;

export const SexBox = styled.div`
  position: relative;
  text-align: left;
  margin-top: 16px;
`;
export const SexFlex = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  jastify-content: center;
`;
export const SexInput = styled(Field)``;
export const SexLabel = styled.label`
  display: inline-flex;
  height: 35px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  font-weight: 400;
  font-size: 14px;
  line-hieght: 24px;

  border: 0 solid;
  border-radius: 40px;
  cursor: pointer;
  color: ${props => (props.checked ? '#FFFFFF' : '#888888')};

  background-color: ${props => (props.checked ? '#54adff' : '#FFFFFF')};
  > input[type='radio'] {
    // visibility: hidden;
    height: 0;
    width: 0;
  }
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
`;

export const SexTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-hieght: 19px;
  color: #111111;
  @media screen and (min-width: 767px) {
    font-size: 20px;
    line-hieght: 26px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
export const MessageErrors = styled.div`
  color: #ff0000;
`;
