import { Button } from 'bootstrap';
import React, { Component } from 'react';
import './App.css';
import FrameSliderBottomButton from './FrameSliderBottomButton';

class ContactPage extends Component {
    render() {
      
      return (
        <header className="App-Frame">

        {/* <div className="white-page"> */}

        {/* <text className="PageHeaders"> Contact</text> */}


        {/* </div> */}
       {/* need to place gap between previous page ending and black strip */}
        <div className="Black-strip">
            <text className="Black-stripText" >Create. Contribute. live. love . work. fitness. breathe</text>
           <div className="FrameSliderBottomButtons">
             
            <FrameSliderBottomButton/>
           
            </div>
      
            <button className="Black-stripButton"> Contact Me</button>
            <text className="CopyrightLine"> Copyright © Shoungruf Raina. Developed by Shoungruf Raina</text>
             </div>
      </header>
      );
  
      // ...
    }
  }
  
  export default ContactPage; 