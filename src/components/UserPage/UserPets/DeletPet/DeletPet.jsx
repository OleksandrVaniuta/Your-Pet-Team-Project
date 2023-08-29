import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DeleteButton } from './DeletPet.styled';

export default function DltBtn({ id }) {
  return (
    <DeleteButton onClick={() => {}}>
      <DeleteOutlineIcon
        sx={[
          {
            fontSize: 32,
            color: '#54ADFF',
            verticalAlign: 'middle',
            transition: 'color 1s ease',
          },
          { '&:hover': { color: '#85080a' } },
        ]}
      />
    </DeleteButton>
  );
}
