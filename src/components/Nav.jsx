import React from "react";
import NavClass from './Nav.module.css'

const Nav = () => {
    return <nav className={NavClass.nav}>
    <div>
      Profile
    </div>
    <div>
      Messages
    </div>
    <div>
      News
    </div>
    <div>
      Music
    </div>
    <div>
      Settings
    </div>
  </nav>
}

export default Nav