import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WatchTable from './components/WatchTable';
import CreateWatch from './components/CreateWatch';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Market Watcher</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">myWatch</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">createWatch</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={WatchTable} />
          <Route path="/create" component={CreateWatch} />
        </div>
      </Router>
    );
  }
  
}

export default App;
