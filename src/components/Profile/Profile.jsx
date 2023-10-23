import React from "react";
import ProfileLogo from "./Profile-user";
import MainClass from './Profile.module.css'
import Post from './Profile-user-posts/Profile-user-posts'
import MainInput from "./Profile-input/Profile-input";

const Main = () => {
    return <main className={MainClass.main}>
        <div>
            <img className={MainClass.background} src='https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161403.jpg'></img>
        </div>
        <ProfileLogo />
        <MainInput />
        <div className="posts">
            <Post message='Hi my name Nikita' number='15'/>
            
            <Post message='Hi my name Maxim' number='1' />
        </div>
    </main>
}

export default Main