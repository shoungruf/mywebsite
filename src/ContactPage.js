import { Button } from 'bootstrap';
import React, { Component } from 'react';
import './App.css';
import FrameSliderButtons from './FrameSliderButtons';

class ContactPage extends Component {
    render() {
      
      return (
        <header className="App-Frame">

        <div className="white-page">

        </div>
       {/* need to place gap between previous page ending and black strip */}
        <div className="Black-strip">
            <text className="Black-stripText" >Create. Contribute. live. love . work. fitness. breathe</text>
           
            <FrameSliderButtons/>
            <button className="Black-stripButton"> Contact</button>
            </div>
      </header>
      );
  
      // ...
    }
  }
  
  export default ContactPage; 