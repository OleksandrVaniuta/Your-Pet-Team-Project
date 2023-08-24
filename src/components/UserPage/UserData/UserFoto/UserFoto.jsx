// import { useState } from 'react';
import UserPhotoContainer from './UserPhotoContainer/UserPhotoContainer';
import { PhotoEl } from './UserPhotoEl.styled';
import UserPhotoUpload from './UserPhotoUpload/UserPhotoUpload';
import { useState, useEffect } from 'react';
import UserPhotoConfirm from './UserPhotoConfirm/UserPhotoConfirm';

export default function UserPhotoEl(edit) {
  const [userPhoto, setUserPhoto] = useState(null);
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
    <PhotoEl>
      <UserPhotoContainer photoUrl={prewiew ? prewiew : userPhoto} />
      {/* {edit && (
        <div>
          {!photoUpoaded ? (
            <UserPhotoUpload setFile={setFile} uploaded={setPhotoUpoaded} />
          ) : (
            <UserPhotoConfirm file={file} uploaded={setPhotoUpoaded} />
          )}
        </div>
      )} */}
      {edit && !photoUpoaded && (
        <UserPhotoUpload setFile={setFile} uploaded={setPhotoUpoaded} />
      )}
      {edit && photoUpoaded && (
        <UserPhotoConfirm file={file} uploaded={setPhotoUpoaded} />
      )}
      {/* {!photoUpoaded ? (
        <UserPhotoUpload setFile={setFile} uploaded={setPhotoUpoaded} />
      ) : (
        <UserPhotoConfirm file={file} uploaded={setPhotoUpoaded} />
      )} */}
    </PhotoEl>
  );
}
