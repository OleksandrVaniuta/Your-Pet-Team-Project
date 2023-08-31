import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFriends } from 'redux/friends/operation';
import { allFriends } from 'redux/friends/selectors';
import FriendsList from 'components/FriendsList.jsx/FriendsList';
import { TitlePage } from './FriendsPage.styled';
import { FriendsWrapper } from './FriendsPage.styled';

const FriendsPage = () => {
  const dispatch = useDispatch();
  const friends = useSelector(allFriends);

  useEffect(() => {
    dispatch(getAllFriends());
  }, [dispatch]);

  return (
    <FriendsWrapper>
      <TitlePage>Our friends</TitlePage>
      <FriendsList friend={friends} />
    </FriendsWrapper>
  );
};

export default FriendsPage;
