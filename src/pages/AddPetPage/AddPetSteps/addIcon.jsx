import { ReactComponent as DogIcon } from '../iconAdd/dog.svg';
import { ReactComponent as Photo } from '../iconAdd/photo.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SwipeUpAltOutlinedIcon from '@mui/icons-material/SwipeUpAltOutlined';
import FemaleIcon from '@mui/icons-material/Female';

export const Dog = () => {
  return (
    <DogIcon
      sx={[
        {
          width: 24,
          height: 24,
          color: 'fff',
          transform: 'rotate(25deg)',
        },
      ]}
    />
  );
};
export const Back = () => {
  return (
    <ArrowBackIcon
      sx={[
        {
          width: 24,
          height: 24,
          color: '#54adff',
        },
      ]}
    />
  );
};

export const Male = () => {
  return (
    <SwipeUpAltOutlinedIcon
      sx={[
        {
          width: 24,
          height: 24,
          // color: '#00C3AD',
        },
      ]}
    />
  );
};

export const Female = () => {
  return (
    <FemaleIcon
      sx={[
        {
          width: 24,
          height: 24,
          // color: '#F43F5E',
        },
      ]}
    />
  );
};

export const PhotoIcon = () => {
  return (
    <Photo
      sx={[
        {
          width: 112,
          height: 112,
          fill: '#F43F5E',
        },
      ]}
    />
  );
};
