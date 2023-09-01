import styled from '@emotion/styled';

import bg_desctop_1x from '../../images/background/bg_desctop_1x.png';
import bg_desctop_2x from '../../images/background/bg_desctop_2x.png';
import bg_tablet_1x from '../../images/background/bg_tablet_1x.png';
import bg_tablet_2x from '../../images/background/bg_tablet_2x.png';
import bg_mobile_1x from '../../images/background/bg_mobile_1x.png';
import bg_mobile_2x from '../../images/background/bg_mobile_2x.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: ${({ theme }) => theme.breakpoints.desktop};
  }

  margin: 0 auto;
  text-align: center;
  align-items: center;
  background-image: url('${bg_mobile_1x}');
  background-size: contain;
  background-position: center;
  background-repeat: repeat-y;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bg_mobile_2x}');
  }

  @media screen and (min-width: 768px) {
    background-image: url('${bg_tablet_1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bg_tablet_2x}');
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url('${bg_desctop_1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bg_desctop_2x}');
    }
  }
`;
