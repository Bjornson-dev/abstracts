import React from 'react';
import s from './ContentBody.module.scss';
const ContentBody = (props) => {
  return (
    <div>
      {props.content}
    </div>
  )
};

export default ContentBody;