import { useLocation } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../../NoticesAddPetBtn/plus.svg';
// import { useMediaQuery } from '@mui/material';
import { NavtoAddPetPage } from './AddPetBtn.styled';

export const AddPetBtn = () => {
  //   const isMobileScreen = useMediaQuery('(max-width: 767px)');

  const location = useLocation();

  return (
    <>
      <NavtoAddPetPage to={'/add-pet'} state={{ from: location }}>
        <PlusIcon />
        <span>Add Pet</span>
      </NavtoAddPetPage>
    </>
  );
};
