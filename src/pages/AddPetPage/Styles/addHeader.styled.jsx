import styled from '@emotion/styled';
export const HeaderBox = styled.div`

`;
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
      // margin-bottom: ${props => (props.step === 0 ? '60px' : '36px')};
  }
`;
export const OptionBox = styled.div`
// position: relative;
  color: #8888;
  width: 80px;
  text-align: start;
  height: 34px;
  margin-top: 24px;
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
  background-color: #8888;
  border-radius: 8px;
  width: 80px;
  text-align: start;
  height: 8px;
  margin-top: 12px;
  @media screen and (min-width: 767px) {
    width: 120px;
  
  }
`;

