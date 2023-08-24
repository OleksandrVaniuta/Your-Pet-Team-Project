import UserFormItem from '../UserFormItem/UserFormItem';
import { UserFormComtainer } from './UserForm.styled';
import UserPhotoEl from '../UserFoto/UserFoto';
import { useState } from 'react';
import EditBtn from '../EditUserFrormBtn/EditUserFormBtn';

export default function UserForm() {
  const [edit, setEdit] = useState(false);

  return (
    <UserFormComtainer>
      <EditBtn edit={edit} changed={setEdit} />
      <UserPhotoEl edit={edit} />
      <UserFormItem edit={edit} />
    </UserFormComtainer>
  );
}
