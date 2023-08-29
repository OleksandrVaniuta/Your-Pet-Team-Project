import { AddPetBtn } from '../AddPetBtn/AddPetBtn';
import { UserPetsTitle, UserPetContainer } from './UserPetsHeader.styled';

export default function UserPetsHeader() {
  return (
    <UserPetContainer>
      <UserPetsTitle>My Pets:</UserPetsTitle>
      <AddPetBtn />
    </UserPetContainer>
  );
}
