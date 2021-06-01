import React, { Component } from 'react';
import insta from './SliderButtons/InstaIcon.svg';
import fb from './SliderButtons/fbIcon.svg';
import github from './SliderButtons/githubIcon.svg';
import mail from './SliderButtons/mail.svg';
import lnkedin from './SliderButtons/linkedin-icon.svg';


import './App.css';


class FrameSliderBottomButtons extends Component {
  render() {
    
    return (
       <div className="FlexBottomButtons">
        <img src={insta} className="App-logo" alt="logo"  />
     <img src={fb} className="App-logo"  alt="logo"  />
    <img src={github} className="App-logo"  alt="logo"  />
     <img src={mail} className="App-logo"  alt="logo" />
    <img src={lnkedin} className="App-logo"  alt="logo"  />
    </div>
    );

    // ...
  }
}

export default FrameSliderBottomButtons; 