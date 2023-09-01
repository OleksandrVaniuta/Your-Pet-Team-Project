import styled from '@emotion/styled';

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
transition: all 0.2s ease-in-out;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
  }

  > input[type='radio'] {
    // visibility: hidden;
    height: 0;
    width: 0;
  }

  }
`;
