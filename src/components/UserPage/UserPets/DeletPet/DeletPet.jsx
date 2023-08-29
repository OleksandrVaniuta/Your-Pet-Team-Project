import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DeleteButton } from './DeletPet.styled';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/Profile/ProfileOperations';

export default function DltBtn({ id }) {
  const dispatch = useDispatch();

  const handlelete = () => {
    dispatch(deletePet(id));
  };

  return (
    <DeleteButton onClick={handlelete}>
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
