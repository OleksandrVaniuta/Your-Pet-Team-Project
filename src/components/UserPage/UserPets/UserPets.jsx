import { useSelector } from 'react-redux';
import { selectMyPetsData } from '../../../redux/Profile/ProfileSelectors';

import UserPetsHeader from './UserPetsHeader/UserPetsHeader';
import PetsList from './UserPetsList/UserPetsList';

import { UserPetsCOntainer } from './UserPets.styled';

export default function UserPets() {
  const pets = useSelector(selectMyPetsData);

  return (
    <UserPetsCOntainer>
      <UserPetsHeader />
      {pets && <PetsList pets={pets} />}
    </UserPetsCOntainer>
  );
}
