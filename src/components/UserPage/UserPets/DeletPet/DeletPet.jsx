import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DeleteButton } from './DeletPet.styled';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/Profile/ProfileOperations';
import ModalLogout from '../../../ModalLogout/ModalLogout';
import ModalApproveAction from '../../../ApproveAction/ApproveAction';
import { useState } from 'react';
import {
  DtlAddModalTitle,
  DltAddModalText,
} from '../../../DeleteMyAdd/DeletMyAdd.styled';

export default function DltBtn({ id, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // const handlelete = () => {
  //   dispatch(deletePet(id));
  // };

  const toggleModal = () => {
    setIsModalOpen(PrevState => !PrevState);
  };

  const handledelete = () => {
    dispatch(deletePet(id));
    setIsModalOpen(false);
  };

  return (
    <DeleteButton onClick={toggleModal}>
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
      {isModalOpen && (
        <ModalLogout toggleModal={toggleModal}>
          <ModalApproveAction
            toggleModal={toggleModal}
            type="button"
            clickHandler={handledelete}
            icon={<DeleteOutlineIcon />}
          >
            <DtlAddModalTitle>Delete adverstiment?</DtlAddModalTitle>
            <DltAddModalText>
              Are you sure you want to delete "{title} ? You can`t undo this
              action.
            </DltAddModalText>
          </ModalApproveAction>
        </ModalLogout>
      )}
    </DeleteButton>
  );
}
