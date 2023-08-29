import { useDispatch } from 'react-redux';
import { updateAvatar, refresh } from 'redux/Auth/AuthOperations';

import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ConfirmPhoto, ConfirmPhotoContainer } from './UserPhotoConfirm.styled';

export default function UserPhotoConfirm({
  file,
  uploaded,
  setFile,
  setPrewiew,
}) {
  const dispatch = useDispatch();

  const handleUploadFile = async () => {
    const formData = new FormData();

    formData.append('avatar', file);
    console.log(formData);
    await dispatch(updateAvatar(formData));
    dispatch(refresh());
  };

  const handleConfirm = () => {
    handleUploadFile();
    uploaded(false);
  };

  const handleDecly = () => {
    setFile(null);
    setPrewiew(null);
    uploaded(false);
  };

  return (
    <ConfirmPhotoContainer>
      <CheckOutlinedIcon
        sx={[
          {
            fontSize: 24,
            color: '#54ADFF',
            // verticalAlign: 'middle',
            cursor: 'pointer',
          },
        ]}
        onClick={handleConfirm}
      />
      <ConfirmPhoto>Confirm</ConfirmPhoto>
      <CloseOutlinedIcon
        sx={[
          {
            fontSize: 24,
            color: '#ff0000',
            // verticalAlign: 'middle',
            cursor: 'pointer',
          },
        ]}
        onClick={handleDecly}
      />
    </ConfirmPhotoContainer>
  );
}
