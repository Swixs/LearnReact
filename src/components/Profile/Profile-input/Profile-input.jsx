import React from "react";
import ClassInput from './ProfileInput.module.css'

const ProfileInput = () => {
    return (
        <div >
            <input className={ClassInput.item} type="text" placeholder="Send message"/>
        </div>
    );
}

export default ProfileInput