import React from "react";
import ProfileLogo from "./Profile-user";
import ProfileClass from './Profile.module.css';
import ProfileInput from "./Profile-input/Profile-input";
import ProfilePost from "./Profile-user-posts/Profile-user-posts";

const Profile = () => {
    return <main className={ProfileClass.main}>
        <div>
            <img className={ProfileClass.background} src='https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161403.jpg'></img>
        </div>
        <ProfileLogo />
        <ProfileInput />
        <div className="posts">
            <ProfilePost />
        </div>
    </main>
}

export default Profile