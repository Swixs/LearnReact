import React from "react";
import NavClass from './Nav.module.css'
import { NavLink } from "react-router-dom";


const Nav = () => {
  return <nav className={NavClass.nav}>
    <div>
      <NavLink to='/Profile' className={NavClass.item}>Profile</NavLink>
    </div>
    <div>
      <NavLink to='/Dialogs' className={NavClass.item}>Dialogs</NavLink>
    </div>
    <div>
      <NavLink to='/News' className={NavClass.item}>News</NavLink>
    </div>
    <div>
      <NavLink to='/Music' className={NavClass.item}>Music</NavLink>
    </div>
    <div>
      <NavLink to='/Settings' className={NavClass.item}>Settings</NavLink>
    </div>
  </nav>
}

export default Nav