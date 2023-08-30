import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  max-width: 458px;
  margin: auto;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;

  border: none;
  background-color: #fff;
  boxshadows: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)';
  }
  ,
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
export const Dog = styled.svg``;
export const Back = styled.svg``;