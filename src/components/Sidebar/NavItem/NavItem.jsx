import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavItem.module.scss'


const NavItem = (props) => {
  return (
    <li className={s.navItem}>
      <NavLink to={props.link} className={s.navLink} activeClassName={s.navLink__active}>
        {props.title}
      </NavLink>
    </li>
  )
};


export default NavItem;