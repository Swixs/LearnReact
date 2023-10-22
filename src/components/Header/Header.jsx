import React from "react";
import headerClass from './Header.module.css'


const Header = () => {
   return  <header className={headerClass.Header}>
        <div className={headerClass.logo}>Logo</div>
    </header>
}

export default Header