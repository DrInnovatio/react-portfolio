import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from "./components/Navigation"
import Header from "./components/Header"


class App extends Component{
  render(){
    return(
      <div>
          <Navigation logoTitle="React Project"/>
          <Header title="Stylish Portfolio" button="Find Out More"/>
      </div>       
    );
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));



