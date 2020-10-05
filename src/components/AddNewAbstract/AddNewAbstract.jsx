import React from 'react';
import { Route } from 'react-router-dom';
import s from './AddNewAbstract.module.scss';

const AddNewAbstract = (props) => {

  let state = props.state,
      addNewAbstract = () => {
        state.addNewAbstract();
      };

  return (
    <Route exact path={props.link}>
      <div className={s.addNewAbstract}>
        <h2>Добавить конспект</h2>
        <form action="">
          <textarea
            className={s.abstractEditor}
            cols="90" rows="25"
          />
          <input
            type="text" name="name"
          />
        </form>
        <button className={s.addAbstract} onClick={addNewAbstract}>Добавить конспект</button>
      </div>
    </Route>
  )
};

export default AddNewAbstract;