import './App.css';
import React, { Component } from 'react';

class Navigation extends Component{
  render(){
  return (
    <div>
      <nav>
        <h2>React Project</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contract</li>
        </ul>
      </nav>
      <div>
        Logo
      </div>
    </div>
  );
 }
}

export default Navigation;