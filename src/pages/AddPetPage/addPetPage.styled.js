import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 17px 8px;
  justify-content: center;
  max-width: 280px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 767px) {
    margin: auto;
    padding: 20px 32px 20px 32px;
    max-width: ${props =>
      props.category !== 'your pet' && props.step === 2 ? '704px' : '458px'};
  }
  @media screen and (min-width: 1280px) {
    max-width: ${props =>
      props.category !== 'your pet' && props.step === 2 ? '822px' : '458px'};
    padding: ${props =>
      props.category !== 'your pet' && props.step === 2
        ? '30px 75px'
        : '20px 32px'};
  }
`;
