import styled from '@emotion/styled';

export const TitlePage = styled.h1`
  margin-top: 20px;
  padding-left: 12px;
  padding-reiht: auto;
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  color: #111111;
  line-height: normal;
  @media (min-width: 768px) {
    font-size: 28px;
    text-align: ${props =>
      props.category !== 'your pet' && props.step === 2 ? 'center' : 'left'};
  }
`;

export const Options = styled.ul`
  display: flex;
  text-align: left;
  gap: 12px;
  @media (min-width: 768px) {
    gap: 16px;
    justify-content: ${props =>
      props.category !== 'your pet' && props.step === 2 ? 'center' : 'left'};
    margin-bottom: ${props => (props.step === 0 ? '24px' : '0px')};
  }
`;

export const OptionBox = styled.div`
  position: relative;
  width: 80px;
  text-align: start;
  height: 34px;
  margin-top: 24px;
  font-weight: 500;
  font-size: 10px;
  line-hieght: normal;

  color: ${props => {
    if (props.step === 0) {
      return props.index === 0 ? '#54ADFF' : '#CCE4FB';
    } else if (props.step === 1) {
      return props.index === 0
        ? '#00C3AD'
        : props.index === 1
        ? '#54ADFF'
        : '#CCE4FB';
    } else if (props.step === 2) {
      return props.index < 2 ? '#00C3AD' : '#54ADFF';
    }
  }};
  @media screen and (min-width: 767px) {
    width: 120px;
    font-size: 16px;
  }
`;

export const OptionDecor = styled.div`
  border-radius: 8px;
  width: 80px;
  text-align: start;
  height: 8px;
  margin-top: 12px;
  background-color: ${props => {
    if (props.step === 0) {
      return props.index === 0 ? '#54ADFF' : '#CCE4FB';
    } else if (props.step === 1) {
      return props.index === 0
        ? '#00C3AD'
        : props.index === 1
        ? '#54ADFF'
        : '#CCE4FB';
    } else if (props.step === 2) {
      return props.index < 2 ? '#00C3AD' : '#54ADFF';
    }
  }};
  @media screen and (min-width: 767px) {
    width: 120px;
  }
`;
