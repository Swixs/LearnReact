import React from "react";
import ClassInput from './MainInput.module.css'

const MainInput = () => {
    return (
        <div >
            <input className={ClassInput.item} type="text" placeholder="Send message"/>
        </div>
    );
}

export default MainInput