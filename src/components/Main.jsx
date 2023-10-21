import React from "react";
import MainLogo from "./Main-user";
import MainClass from './Main.module.css'

const Main = () => {
    return <main className={MainClass.main}>
        <div>
            <img className={MainClass.background} src='https://img.freepik.com/free-vector/flat-design-mountain-landscape_23-2149161403.jpg'></img>
        </div>
        <MainLogo />
    </main>
}

export default Main