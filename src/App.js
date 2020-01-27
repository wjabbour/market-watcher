import React, { Component } from 'react';
import './App.css';
import WatchTable from './components/WatchTable';
import CreateWatch from './components/CreateWatch';



class App extends Component {
  render() {
    return (
      <div id="App">
        <WatchTable />
        <CreateWatch />
      </div>
    );
  }
  
}

export default App;
