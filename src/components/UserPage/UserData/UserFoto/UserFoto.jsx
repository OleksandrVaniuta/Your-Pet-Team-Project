import { useState, useEffect } from 'react';
import { selectUserAvatar } from 'redux/Auth/AuthSelectors';
import { useSelector } from 'react-redux';
import UserPhotoUpload from './UserPhotoUpload/UserPhotoUpload';
import UserPhotoContainer from './UserPhotoContainer/UserPhotoContainer';
import UserPhotoConfirm from './UserPhotoConfirm/UserPhotoConfirm';
import { PhotoEl } from './UserPhotoEl.styled';

export default function UserPhotoEl({ edit }) {
  const userPhoto = useSelector(selectUserAvatar);
  const [prewiew, setPrewiew] = useState(null);
  const [file, setFile] = useState(null);
  const [photoUpoaded, setPhotoUpoaded] = useState(false);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPrewiew(reader.result);
      };
    }
  }, [file]);

  return (
    <PhotoEl edit>
      <UserPhotoContainer photoUrl={prewiew ? prewiew : userPhoto} />
      {edit && !photoUpoaded && (
        <UserPhotoUpload setFile={setFile} uploaded={setPhotoUpoaded} />
      )}
      {edit && photoUpoaded && (
        <UserPhotoConfirm
          file={file}
          uploaded={setPhotoUpoaded}
          setFile={setFile}
          setPrewiew={setPrewiew}
        />
      )}
    </PhotoEl>
  );
}
