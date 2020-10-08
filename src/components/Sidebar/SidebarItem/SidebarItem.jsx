import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SidebarItem.module.scss';

const SidebarItem = (props) => {
  return (
    <li className={s.item}>
      <NavLink to={props.link} className={s.link} activeClassName={s.activeLink}>
        {props.title}
      </NavLink>
    </li>
  )
};

export default SidebarItem;