import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from 'redux/Profile/ProfileOperations';
import UserForm from 'components/UserPage/UserData/UserForm/UserForm';
import { UserPageContainer } from './UserPage..styled';
import UserPets from 'components/UserPage/UserPets/UserPets';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { UserWrapper } from './UserPage..styled';

const UserPage = () => {
  const dispatch = useDispatch();

  const [congradModal, setCongradModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //   setIsModalOpen(false);
  //   setCongradModal(false);
  //   setIsFirstVisit(false);
  //   console.log(isFirstVisit);
  // };

  // const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(updateProfile());
  }, [dispatch]);

  useEffect(() => {
    const isNewRegistration = localStorage.getItem('isNewRegistration');
    if (isNewRegistration === 'true') {
      setIsModalOpen(true);
      setCongradModal(true);
      localStorage.setItem('isNewRegistration', 'false');
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(false);
    setCongradModal(false);
  };

  return (
    <UserWrapper>
      {isModalOpen && congradModal && (
        <ModalLogout toggleModal={toggleModal}>
          <ModalCongrats toggleModal={toggleModal} />
        </ModalLogout>
      )}
      <UserPageContainer>
        <UserForm />
        <UserPets />
      </UserPageContainer>
    </UserWrapper>
  );
};

export default UserPage;
