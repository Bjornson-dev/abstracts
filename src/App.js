import React from 'react';
import Abstracts from './components/Content/Abstracts';
import Sidebar from './components/Sidebar/Sidebar'

const App = (props) => {
  return (
    <div className="App">
      <Sidebar state={props.state.sidebar} />
      <Abstracts state={props.state.abstracts} />
    </div>
  )
}

export default App;
