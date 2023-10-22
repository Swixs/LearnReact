import React from "react";
import NavClass from './Nav.module.css'

const Nav = () => {
    return <nav className={NavClass.nav}>
    <a className={NavClass.firstA} href="#">
      Profile
    </a>
    <a href="#">
      Messages
    </a>
    <a href="#">
      News
    </a>
    <a href="#">
      Music
    </a>
    <a href="#">
      Settings
    </a>
  </nav>
}

export default Nav