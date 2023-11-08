import React from "react";
import FriendsStyle from "./FriendNav.module.css";
import ItemFriend from "./ItemFriend";


const FriendsNav = (props) => {

   
    let FriendElement = props.friends.map((f) => <ItemFriend foto={f.foto} id={f.id} name={f.name} />)

    return (
        <div className={FriendsStyle.friendsNav}>
            {FriendElement}
        </div>
    );
}

export default FriendsNav
