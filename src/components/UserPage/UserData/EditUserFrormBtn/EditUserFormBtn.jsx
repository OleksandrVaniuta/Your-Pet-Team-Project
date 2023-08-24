import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { EditButton } from './EditUserFormBtn.styled';

export default function EditBtn({ edit, changed }) {
  return (
    <EditButton onClick={() => changed(!edit)}>
      {edit ? (
        <CloseOutlinedIcon
          sx={[
            {
              fontSize: 24,
              color: '#54ADFF',
              verticalAlign: 'middle',
            },
          ]}
        />
      ) : (
        <DriveFileRenameOutlineOutlinedIcon
          sx={[
            {
              fontSize: 24,
              color: '#54ADFF',
              verticalAlign: 'middle',
            },
          ]}
        />
      )}
    </EditButton>
  );
}
