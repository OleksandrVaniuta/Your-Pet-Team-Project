import {
  PetItemCintainer,
  PhotoContainer,
  PetDescr,
  PetInfo,
  PetDecrStyled,
} from './UserPetsItem.styled';
import DltBtn from '../DeletPet/DeletPet';

export default function PetsItem({
  id,
  name,
  dateOfBirth,
  comments,
  type,
  avatarPet,
}) {
  return (
    <PetItemCintainer id={`${id}`}>
      <PhotoContainer>
        <img src={`${avatarPet}`} alt="Pet_Photo" />
      </PhotoContainer>
      <PetInfo>
        <PetDescr>
          <PetDecrStyled>Name:</PetDecrStyled>
          {`${name}`}
        </PetDescr>
        <PetDescr>
          <PetDecrStyled>Date of birth:</PetDecrStyled>
          {`${dateOfBirth.replace(/-/g, '.')}`}
        </PetDescr>
        <PetDescr>
          <PetDecrStyled>Type:</PetDecrStyled>
          {`${type}`}
        </PetDescr>
        <PetDescr last>
          <PetDecrStyled>Comments:</PetDecrStyled>
          {`${comments}`}
        </PetDescr>
      </PetInfo>
      <DltBtn id={id} title={name} />
    </PetItemCintainer>
  );
}
