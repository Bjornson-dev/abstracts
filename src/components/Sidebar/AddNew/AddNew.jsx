import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AddNew.module.scss';
const AddNew = (props) => {
  return (
    <div className={s.addNewBtn}>
      <NavLink to={props.link}>
        {props.text}
      </NavLink>
    </div>
  )
};

export default AddNew;