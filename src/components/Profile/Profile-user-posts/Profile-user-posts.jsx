import React from "react";
import classPosts from './ProfileUserPosts.module.css'
import PostTxt from "./ProfileUsersPostText";

const ProfilePost = (props) => {
    let textElements = props.text.map(t => <PostTxt text={t.text} id={t.id} likes={t.likes} foto={t.foto} />)

    return (
        <div className={classPosts.postRow}>
            <div className={classPosts.likePost}>
                {textElements}
            </div>
        </div>
    );
}

export default ProfilePost