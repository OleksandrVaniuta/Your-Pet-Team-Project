// import { useState } from 'react';
import PetsItem from '../UserPetsItem/UserPetsItem';
import { PetItemCintainer } from './UserPEtsList.styled';

export default function PetsList({ pets }) {
  return (
    <PetItemCintainer>
      {pets.map(({ _id, name, dateOfBirth, comments, type, avatarPet }) => {
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
