import UserFormItem from '../UserFormItem/UserFormItem';
import {
  UserFormComtainer,
  UserFormWraper,
  PhotoContainerWrapper,
  UserDataTitle,
} from './UserForm.styled';
import UserPhotoEl from '../UserFoto/UserFoto';
import { useState } from 'react';
import EditBtn from '../EditUserFrormBtn/EditUserFormBtn';

export default function UserForm() {
  const [edit, setEdit] = useState(false);

  return (
    <UserFormComtainer>
      <UserDataTitle>My information:</UserDataTitle>
      <UserFormWraper>
        <PhotoContainerWrapper>
          <EditBtn edit={edit} changed={setEdit} />
          <UserPhotoEl edit={edit} />
        </PhotoContainerWrapper>

        <UserFormItem edit={edit} />
      </UserFormWraper>
    </UserFormComtainer>
  );
}
