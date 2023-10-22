import React from "react";
import MainLogo from "./Main-user";
import MainClass from './Main.module.css'
import Post from './Main-user-posts/main-user-posts'
import MainInput from "./Main-input/Main-input";

const Main = () => {
    return <main className={MainClass.main}>
        <div>
            <img className={MainClass.background} src='https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161403.jpg'></img>
        </div>
        <MainLogo />
        <MainInput />
        <div className="posts">
            <Post message='Hi my name Nikita' number='15'/>
            
            <Post message='Hi my name Maxim' number='1' />
        </div>
    </main>
}

export default Main