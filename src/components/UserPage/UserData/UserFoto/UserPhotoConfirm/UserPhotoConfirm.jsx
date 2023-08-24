import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ConfirmPhoto, ConfirmPhotoContainer } from './UserPhotoConfirm.styled';

export default function UserPhotoConfirm({ file, uploaded }) {
  const handleConfirm = () => {
    uploaded(false);
  };

  const handleDecly = () => {
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
