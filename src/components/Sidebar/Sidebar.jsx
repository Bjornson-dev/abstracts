import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <h1 className={s.langHeading}> =&lt;&lt; Javascript &gt;&gt;= </h1>
      <nav className={s.nav}>
        <ul className={s.list}>
          <SidebarItem link="/link-1" title="test-1"/>
          <SidebarItem link="/link-2" title="test-2"/>
          <SidebarItem link="/link-3" title="test-3"/>
        </ul>
      </nav>
      <NavLink to="/add-new-abstract" className={s.btnNew} activeClassName={s.btnNewActive}>
        ~~&gt; + Добавить конспект + &lt;~~
      </NavLink>
    </div>
  )
};

export default Sidebar;