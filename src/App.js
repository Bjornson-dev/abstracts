import React from 'react';
import Abstracts from './components/Content/Abstracts';
import Sidebar from './components/Sidebar/Sidebar'

const App = (props) => {
  return (
    <div className="App">
      <Sidebar state={props.state.getState().sidebar} />
      <Abstracts state={props.state.getState().abstracts}/>
    </div>
  )
}

export default App;
