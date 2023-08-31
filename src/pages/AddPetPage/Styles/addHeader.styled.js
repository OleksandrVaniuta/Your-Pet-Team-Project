import styled from '@emotion/styled';
export const HeaderBox = styled.div``;
export const TitlePage = styled.h1`
  color: #111;
  // align-items: start;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 12px;
 padding-reiht: auto;
  @media screen and (min-width: 768px) {
    font-size: 28px;
     text-align: ${props =>
       props.category !== 'my-pet' && props.step === 2 ? 'center' : 'left'};
  }
  }
`;
export const Options = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: row;
   justify-content: center;
  align-items: center;
// margin-bottom: 36px;
  list-style: none;   
  }
  @media screen and (min-width: 767px) {
     gap: 16px;
       margin-bottom: ${props => (props.step === 0 ? '60px' : '36px')};
  }
`;
export const OptionBox = styled.div`
  // position: relative;
  color: #8888;
  width: 80px;
  text-align: start;
  height: 34px;
  margin-top: 24px;
  color: ${props => {
    if (props.step === 0) {
      return props.index === 0 ? '#54ADFF' : '#888888';
    } else if (props.step === 1) {
      return props.index === 0
        ? '#00C3AD'
        : props.index === 1
        ? '#54ADFF'
        : '#888888';
    } else if (props.step === 2) {
      return props.index < 2 ? '#00C3AD' : '#54ADFF';
    }
  }};
  @media screen and (min-width: 767px) {
    width: 120px;
  }
`;

export const OptionName = styled.p`
 
  font-weight: 500;
  font-size: 10px;
  line-hieght: normal;
  @media screen and (min-width: 767px) {
   font-size: 16px;
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
  }
  @media screen and (min-width: 767px) {
    width: 120px;
  
  }
`;
