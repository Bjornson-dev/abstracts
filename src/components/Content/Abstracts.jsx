import React from 'react';
import AddNewAbstract from './../AddNewAbstract/AddNewAbstract';
import s from './Abstracts.module.scss';
import Abstract from './Abstract/Abstract';

const Abstracts = (props) => {
  let abstracts = props.state.content.map(e => {
    return <Abstract link={e.link} title={e.title} content={e.content} />
  });

  return (
    <div className={s.abstracts}>
      {abstracts}
      <AddNewAbstract state={props.state.addNew} link="/add-new" />
    </div>
  )
};

export default Abstracts;