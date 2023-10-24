import React from "react";
import NavClass from './Nav.module.css'
import { NavLink } from "react-router-dom";


const Nav = () => {
  return <nav className={NavClass.nav}>
    <div>
      <NavLink to='/Profile' className = { navData => navData.isActive ? NavClass.active : NavClass.item }>Profile</NavLink>
    </div>
    <div>
      <NavLink to='/Dialogs' className = { navData => navData.isActive ? NavClass.active : NavClass.item }>Dialogs</NavLink>
    </div>
    <div>
      <NavLink to='/News' className = { navData => navData.isActive ? NavClass.active : NavClass.item }>News</NavLink>
    </div>
    <div>
      <NavLink to='/Music' className = { navData => navData.isActive ? NavClass.active : NavClass.item }>Music</NavLink>
    </div>
    <div>
      <NavLink to='/Settings' className = { navData => navData.isActive ? NavClass.active : NavClass.item }>Settings</NavLink>
    </div>
  </nav>
}

export default Nav