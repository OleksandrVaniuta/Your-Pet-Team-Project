import { useDispatch } from 'react-redux';
import { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteNotice } from 'redux/notices/operations';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import ModalApproveAction from 'components/ApproveAction/ApproveAction';
import {
  DltUserAddContainet,
  DtlAddModalTitle,
  DltAddModalText,
} from './DeletMyAdd.styled';

export default function DltUserAddBtn({ id, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(PrevState => !PrevState);
    console.log(isModalOpen);
  };

  const handledelete = () => {
    dispatch(deleteNotice(id));
    setIsModalOpen(false);
  };

  return (
    <DltUserAddContainet
      style={{
        position: 'absolute',
        top: '64px',
        right: '12px',
        color: 'black',
        zIndex: 2,
      }}
      onClick={toggleModal}
    >
      <DeleteOutlineIcon
        sx={[
          {
            fontSize: 24,
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
    </DltUserAddContainet>
  );
}
