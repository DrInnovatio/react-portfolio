import React, {Component} from 'react';
import "./services.css"

class Service extends Component{
  render(){
    return(
      <div className="services">
          <h3>Services</h3>
          <h2>What we offer</h2>
          <div className="row">
            <div>
              <spnd><i class="fa fa-mobile 7x"></i></spnd>
              <h4>Resposive</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad.</p>
            </div>
            <div>
              <spnd><i class="fa fa-thumbs-up 7x"></i></spnd>
              <h4>Resposive</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad.</p>
            </div>
            <div>
              <spnd><i class="fas fa-question 7x"></i></spnd>
              <h4>Resposive</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad.</p>
            </div>
            <div>
              <spnd><i class="fa fa-instagram 7x"></i></spnd>
              <h4>Resposive</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ad.</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Service;

