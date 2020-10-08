import React from 'react';
import { Route } from 'react-router-dom';
import NewAbstractPage from '../NewAbstractPage/NewAbstractPage';
import s from './Content.module.scss';
import ContentBody from './ContentBody/ContentBody';

const Content = (props) => {
  return (
    <div className={s.content}>
      <Route path="/link-1" render={ () => <ContentBody content="Test 1"/> } />
      <Route path="/add-new-abstract" render={ () => <NewAbstractPage /> } />
    </div>
  )
};

export default Content;