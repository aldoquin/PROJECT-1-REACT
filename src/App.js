import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> hello world</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
