import UserPhotoPlug from '../../../../../images/UserPhoto/User_photo_plug.jpg';
import { PhotoContainer } from './UserPhotoContainer.styled';

export default function UserPhotoContainer({ photoUrl }) {
  return (
    <PhotoContainer>
      <img src={photoUrl ? photoUrl : UserPhotoPlug} alt="UserPhoto" />
    </PhotoContainer>
  );
}
