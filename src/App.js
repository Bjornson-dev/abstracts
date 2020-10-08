import React from 'react';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App;
