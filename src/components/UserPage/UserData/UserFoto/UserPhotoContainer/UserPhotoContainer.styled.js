import styled from '@emotion/styled';

export const PhotoContainer = styled.div`
  width: 182px;
  height: 182px;
  border-radius: 40px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
`;
