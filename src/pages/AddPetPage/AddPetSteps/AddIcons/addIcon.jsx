import { ReactComponent as DogIcon } from '../AddIcons/dog.svg';
import { ReactComponent as Photo } from '../AddIcons/photo.svg';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SwipeUpAltOutlinedIcon from '@mui/icons-material/SwipeUpAltOutlined';
import FemaleIcon from '@mui/icons-material/Female';
// import MaleIcon from '@mui/icons-material/Male';
export const Dog = () => {
  return (
    <DogIcon
      sx={[
        {
          width: 24,
          height: 24,
          color: 'fff',
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
