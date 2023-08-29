// import React, { useState } from "react";
import FriendsItem from "components/FriendsItem/FriendsItem";

const FriendsList = ({friend}) => {


    return (
        <ul>
            {friend.map(item => (
            <FriendsItem item={item} key={item._id} />
            ))}
        </ul>
    )
};

export default FriendsList;