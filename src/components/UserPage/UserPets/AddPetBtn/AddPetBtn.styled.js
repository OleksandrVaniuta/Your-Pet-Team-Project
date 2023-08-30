import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavtoAddPetPage = styled(NavLink)`
  @media screen and (max-width: 767px) {
    box-sizing: border-box;
    position: fixed;
    top: 460px;
    right: 20px;
    width: 80px;
    height: 80px;
    color: #fef9f9;
    background: #54adff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 50%;
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16 px;
    align-items: center;
    letter-spacing: 0.04em;
    cursor: pointer;
    border: none;
    gap: 8px;
    z-index: 99;
    &:hover {
      background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    }
  }
  @media screen and (min-width: 768px) {
    display: inline;
    box-sizing: border-box;
    color: #fef9f9;
    background: #54adff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 16px;
    border-radius: 40px;
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    letter-spacing: 0.04em;
    gap: 15px;
    cursor: pointer;
    border: none;
    height: 40px;

    &:hover {
      background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    }
  }
`;
