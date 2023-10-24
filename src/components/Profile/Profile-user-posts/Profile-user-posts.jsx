import React from "react";
import classPosts from './ProfileUserPosts.module.css'
import PostTxt from "./ProfileUsersPostText";


const ProfilePost = () => {

    let text = [
        { id: 1, text: 'Hello my name Nikita', likes : '15 ♡', foto: "https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556782.jpg" },
        { id: 2, text: 'Do you want work',likes: '3 ♡', foto: "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg" },
    ]

    let textElements = text.map(t => <PostTxt text={t.text} id={t.id} likes={t.likes} foto={t.foto} />)
    // let likeElements = like.map(l => )
    return (
        <div className={classPosts.postRow}>
            <div className={classPosts.likePost}>
                {textElements}
            </div>
        </div>
    );
}

export default ProfilePost