import React, { Component } from 'react';
import Background from "../images/stars.jpg";
import "./header.css"


const myStyles = {
    backgroundImage: `url(${Background})`,
    height: "80vh",
    color: "white"
  }

class Header extends Component{

  render(){
    return (

      <header style={myStyles}>

        <h1>{this.props.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum!</p>
        <a href="#button">{this.props.button}</a>

      </header>



    );
  }
};


export default Header;