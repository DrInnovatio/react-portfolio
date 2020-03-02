//import './App.css';
import React, { Component } from 'react';
import "./navigation.css"

class Navigation extends Component{
  render(){
  return (

      <nav>
        <h2 className="logo">React Project</h2>
        <ul>
          <li><a href="#"/>Home</li>
          <li><a href="#"/>About</li>
          <li><a href="#"/>Sevices</li>
          <li><a href="#"/>Portfolio</li>
          <li><a href="#"/>Contract</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;