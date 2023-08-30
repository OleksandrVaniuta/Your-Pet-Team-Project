import styled from '@emotion/styled';

export const Container = styled.div`
  outline: 2px solid black;
  display: flex;
  flex-direction: column;
  // box-sizing: border-box;
  justify-content: center;
  max-width: 280px;
  margin: 68px 20px 37px 20px;

  border-radius: 40px;

  background-color: #fff;
  boxshadows: {
    main: '3px 8px 14px rgba(136, 198, 253, 0.19)';
  }

  @media screen and (min-width: 767px) {
    margin: auto;

    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '704px' : '458px'};
  }
  @media screen and (min-width: 1280px) {
    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '822px' : '458px'};
  }
`;

export const CategoryForm = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 131px;
  height: 176px;
  gap: 12px;
  margin-bottom: 95px;
  margin-top: 24px;
  @media screen and (min-width: 767px) {
    margin-bottom: 137px;
    margin-top: 40px;
  }
`;

export const CheckedLabel = styled.label`
  display: flex;
  width: fit-content;
  padding: 8px 8px;

  gap: 8px;
  border-radius: 40px;
  cursor: pointer;
    font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

 background-color: ${props => (props.checked ? '#54adff' : '#CCE4FB')};
  color: ${props => (props.checked ? '#FEF9F9' : '#54ADFF')};

  > input[type='radio'] {
    // visibility: hidden;
    height: 0;
    width: 0;
  }

  }
`;
