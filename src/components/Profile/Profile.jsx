import React from "react";
import ProfileLogo from "./Profile-user";
import MainClass from './Profile.module.css'
import MainInput from "./Profile-input/Profile-input";
import ProfilePost from "./Profile-user-posts/Profile-user-posts";

const Main = () => {


    return <main className={MainClass.main}>
        <div>
            <img className={MainClass.background} src='https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161403.jpg'></img>
        </div>
        <ProfileLogo />
        <MainInput />
        <div className="posts">
            <ProfilePost />
        </div>
    </main>
}

export default Main