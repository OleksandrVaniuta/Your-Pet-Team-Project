import UserFormItem from '../UserFormItem/UserFormItem';
import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/Auth/AuthSelectors';
import { selectUserData } from 'redux/Profile/ProfileSelectors';
import {
  UserFormComtainer,
  UserFormWraper,
  PhotoContainerWrapper,
  UserDataTitle,
} from './UserForm.styled';
import UserPhotoEl from '../UserFoto/UserFoto';
import { useState } from 'react';
import EditBtn from '../EditUserFrormBtn/EditUserFormBtn';
import LogOut from '../LogOut/LogOut';

export default function UserForm() {
  const [edit, setEdit] = useState(false);
  const user = useSelector(selectUserData);

  return (
    <UserFormComtainer>
      <UserDataTitle>My information:</UserDataTitle>
      <UserFormWraper>
        <PhotoContainerWrapper>
          <EditBtn edit={edit} changed={setEdit} />
          <UserPhotoEl edit={edit} />
        </PhotoContainerWrapper>
        <div>
          {user.name && (
            <UserFormItem edit={edit} user={user && user} setEdit={setEdit} />
          )}
          {!edit && <LogOut />}
        </div>
      </UserFormWraper>
    </UserFormComtainer>
  );
}
