import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriends } from "redux/friends/operation";
import { allFriends} from "redux/friends/selectors";
import FriendsList from "components/FriendsList.jsx/FriendsList";
import { TitlePage } from "./FriendsPage.styled";


 const FriendsPage = () => {
    const dispatch = useDispatch();
    const friends = useSelector(allFriends);
    
    useEffect(() => {
       dispatch(getAllFriends())
       console.log(dispatch(getAllFriends()))
    }, [dispatch]);

    return (
       <div>
        <TitlePage>OurFriends</TitlePage>
        <FriendsList friend ={friends}/>
       </div>
    )
};

export default FriendsPage;