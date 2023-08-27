import styled from '@emotion/styled';
// import { theme } from '../../../theme/theme';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  max-width: 458px;
  margin: auto;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;

  border: 1px solid #000;
  background-color: #fff;

  @media screen and (min-width: 767px) {
    padding: 20px 32px;
    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '704px' : '458px'};
  }
  @media screen and (min-width: 1280px) {
    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '822px' : '458px'};
    padding: ${props =>
      props.category !== 'my-pet' && props.step === 2
        ? '30px 75px'
        : '20px 32px'};
  }
`;

