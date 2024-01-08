import React from "react";
import classMainUser from './Profile-user.module.css'


const MainLogo = () => {
    return <div className={classMainUser.logo}>
        <div className={classMainUser.txt}>
            <div className={classMainUser.NameUser}>Nikita K</div>
            <div>Date of birthd 4 march</div>
            <div>Technologies : js, react, css, html</div>
            <div>Github: Swixs</div>
        </div>
    </div>
}

export default MainLogo