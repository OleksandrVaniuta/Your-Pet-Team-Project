import styled from '@emotion/styled';
export const Container = styled.div`
  // display: flex;
  // box-sizing: border-box;
  // flex-direction: column;
  // align-items: center;
  // text-align: center;
  // maxheight: 723px;
  // width: 280px;
  // margin: 68px 20px 34px 20px;
  // padding: 20px 8px 17px 8px;
  // border-radius: 40px;
  // border: none;
  // border: 1px solid #000;
  // background: #fff;

  // @media screen and (min-width: 767px) {
  //   maxheight: 602px;
  //   width: 704px;
  //   margin: 108px 229px 138px 229px;
  //   padding: 20px 32px 20px 32px;
  // }
  // @media screen and (min-width: 1280px) {
  //   margin: 108px 229px 138px 229px;
  //   width: 822px;
  // }
`;
export const Form = styled.form`
  width: 394px;
`;
export const Forma = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 16px;
`;
export const TitleLabel = styled.p`

  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
`;
export const Label = styled.label`
  display: flex;
  gap: 4px;
  flex-direction: column;
  text-align: start;
  margin-bottom: 20px;
  width: 264px;
`;
export const Input = styled.input`
  color: #111111;
  border-color: #54adff;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
  padding-left: 16px;
  height: 40px;
  width: 264px;
  border-radius: 40px;
  flex-shrink: 0;
  @media screen and (min-width: 767px) {
    width: 395px;
    height: 48px;
    margin-top: 8px;
    padding-left: 16px;
  }
`;


export const ImageBox = styled.div`
  display: flex;
  gap: 12px;
  height: 112px;
  width: 207px;
  align-items: center;
 
  margin-bottom: 24px;
`;
export const InputImage = styled.input`
  width: 112px;
  height: 112px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #cce4fb;
`;
export const Icon = styled.image`
  fontSize: 50, color: '#54ADFF' 
`;


export const InputComments = styled.input`
  color: #111111;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  line-hieght: normal;
  text-align: start;
  padding-left: 16px;
  height: 92px;
  width: 264px;
  border-radius: 20px;
  border-color: #54adff;
  @media screen and (min-width: 767px) {
    width: 395px;
    height: 48px;
    margin-top: 8px;
    padding-left: 16px;
  }
`;
export const SexBox = styled.div`
  display: flex;
  gap: 16px;
  height: 24px;
  width: 250px;
  align-items: center;
  margin-bottom: 16px;
`;
export const SexInput = styled.input`
display: none;
`
export const SexLabel = styled.label`
  height: 24px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-hieght: 24px;
  // padding: 8px 16px;
  border: 0 solid;
  border-radius: 40px;

  color: ${props => {
    switch (props.type) {
      case 'checked':
        return '#FFFFFF';
      default:
        return '#888888';
    }
  }};
  background-color: ${props => {
    switch (props.type) {
      case 'checked':
        return '#54adff';
      default:
        return '#FFFFFF';
    }
  }};
`;
export const SexTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-hieght: 19px;
`;

