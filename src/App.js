import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Clock">
          <Clock />
        </div>
        <div className="Date"> </div>
        <div className="Table">
          <Table />
        </div>
        <div className="Area"></div>
      </div>
    );
  }
}

export default App;
