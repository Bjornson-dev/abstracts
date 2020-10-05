import React from 'react';
import AddNew from './AddNew/AddNew';
import NavItem from './NavItem/NavItem';
import s from './Sidebar.module.scss';

const Sidebar = (props) => {
  let navItems = props.state.map(e => {
    return <NavItem link={e.link} title={e.title} />
  });

  return (
    <div className={s.sidebar}>
      <h1 className={s.currentLang}> =&lt;&lt;JavaScript&gt;&gt;= </h1>
      <nav className={s.nav}>
        <ul className={s.navList}>
          {navItems}
        </ul>
      </nav>
      <AddNew link="/add-new" text="~~>+ Добавить конспект +<~~" />
    </div>
  )
};

export default Sidebar;