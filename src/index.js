import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import globalStyle from './App.css'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

let subscriber = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
subscriber();
store.subscribe(subscriber)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
