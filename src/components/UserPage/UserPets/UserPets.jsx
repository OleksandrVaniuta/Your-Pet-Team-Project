import { useSelector } from 'react-redux';
import { selectMyPetsData } from '../../../redux/Profile/ProfileSelectors';

import UserPetsHeader from './UserPetsHeader/UserPetsHeader';
import PetsList from './UserPetsList/UserPetsList';

import {
  UserPetsCOntainer,
  NoPetsMessageWrapper,
  NoPetParagraph,
} from './UserPets.styled';

export default function UserPets() {
  const pets = useSelector(selectMyPetsData);

  return (
    <UserPetsCOntainer>
      <UserPetsHeader />
      {!pets.length && (
        <NoPetsMessageWrapper>
          <NoPetParagraph>
            You haven't added any of your beloved pets yet.
          </NoPetParagraph>
          <p>To add it, click the 'Add pet' button above.</p>
        </NoPetsMessageWrapper>
      )}
      {pets.length > 0 && <PetsList pets={pets} />}
    </UserPetsCOntainer>
  );
}
