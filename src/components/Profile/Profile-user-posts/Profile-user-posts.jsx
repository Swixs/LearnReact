import React from "react";

import classPosts from './ProfileUserPosts.module.css'

const ProfilePost = (props) => {

    return (
        <div className={classPosts.postRow}>
            <img className={classPosts.postImg} src="https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556782.jpg"></img>
            {props.message}

            <div class={classPosts.likePost}> {props.number}</div>
        </div>
    );
}

export default ProfilePost