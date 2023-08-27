import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/Profile/ProfileOperations';
import UserForm from 'components/UserPage/UserData/UserForm/UserForm';
import { UserPageContainer } from './UserPage..styled';
import UserPets from 'components/UserPage/UserPets/UserPets';

export const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProfile());
  }, [dispatch]);

  return (
    <UserPageContainer>
      <UserForm />
      <UserPets />
    </UserPageContainer>
  );
};
