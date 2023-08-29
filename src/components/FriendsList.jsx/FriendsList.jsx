import FriendsItem from "components/FriendsItem/FriendsItem";
import css from "./FriendsList.module.css";

const FriendsList = ({friend}) => {
    return (
        <ul className={css.list}>
            {friend.map(item => (
            <FriendsItem item={item}
             key={item._id} 
             />
            ))}
        </ul>
    )
};

export default FriendsList;