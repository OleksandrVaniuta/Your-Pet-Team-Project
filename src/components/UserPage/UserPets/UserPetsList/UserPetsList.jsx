import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateProfile } from 'redux/Profile/ProfileOperations';
import { selectMyPetsData } from '../../../../redux/Profile/ProfileSelectors';
import { selectIsUpdatingg } from '../../../../redux/Profile/ProfileSelectors';

import PetsItem from '../UserPetsItem/UserPetsItem';
import { PetItemCintainer } from './UserPEtsList.styled';

export default function PetsList() {
  const pets = useSelector(selectMyPetsData);
  const { isLoading } = useSelector(selectIsUpdatingg);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProfile());
  }, [dispatch]);

  return (
    <PetItemCintainer>
      {!isLoading &&
        pets.map(({ _id, name, dateOfBirth, comments, type, avatarPet }) => {
          return (
            <PetsItem
              key={_id}
              id={_id}
              name={name}
              dateOfBirth={dateOfBirth}
              comments={comments}
              type={type}
              avatarPet={avatarPet}
            />
          );
        })}
    </PetItemCintainer>
  );
}
