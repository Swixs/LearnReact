import FriendsStyle from "./FriendNav.module.css";

const ItemFriend = (props) => {
    let path = '/FriendsNav' + props.id

    return (
        <div className={FriendsStyle.ElementsRow}>
            <img className={FriendsStyle.friendsNavImg} src={props.foto} />
            <div className={FriendsStyle.friendsNavImg}>{props.name}</div>
        </div>
    );
}

export default ItemFriend