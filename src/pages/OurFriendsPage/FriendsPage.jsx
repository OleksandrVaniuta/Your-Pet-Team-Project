import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriends } from "redux/friends/operation";
import { allFriends} from "redux/friends/selectors";
import FriendsList from "components/FriendsList.jsx/FriendsList";
import { PageTitle } from "components/NoticesSearch/PageTitle.styled";


export const FriendsPage = () => {
    const dispatch = useDispatch();
    const friends = useSelector(allFriends);
    
    useEffect(() => {
       dispatch(getAllFriends())
       console.log(dispatch(getAllFriends()))
    }, [dispatch]);

    return (
       <div>
        <PageTitle>OurFriends</PageTitle>
        <FriendsList friend ={friends}/>
       </div>
    )
};

