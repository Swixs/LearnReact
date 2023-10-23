import React from "react";
import classMainUser from './Profile-user.module.css'


const MainLogo = () => {
    return <div className={classMainUser.logo}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIy5ZNah9_OATHugm_vHLTqB5aqF9i9E2rp1uERNenFhOBld9E29qOaylbrVgeLx_VFw&usqp=CAU'></img>
        <div className={classMainUser.txt}>
            <div className={classMainUser.NameUser}>Nikita K</div>
            <div>Date of birthd 4 march</div>
            <div>Technologies : js, react, css, html</div>
            <div>Github: Swixs</div>
        </div>
    </div>
}

export default MainLogo