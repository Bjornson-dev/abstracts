import React from 'react';
import { Route } from 'react-router-dom';
import s from './Abstract.module.scss';

const Abstract = (props) => {
  return (
    <Route exact path={props.link}>
      <h2>
        {props.title}
      </h2>
      <div>
        {props.content}
      </div>
    </Route>
  )
};

export default Abstract;