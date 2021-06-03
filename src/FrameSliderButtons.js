import React, { Component } from 'react';
import insta from './SliderButtons/InstaIcon.svg';
import fb from './SliderButtons/fbIcon.svg';
import github from './SliderButtons/githubIcon.svg';
import mail from './SliderButtons/email.svg';
import behance from './SliderButtons/behance.svg';
import pinterest from './SliderButtons/pinterest.svg';
import lnkedin from './SliderButtons/linkedin-icon.svg';



import './App.css';


class FrameSliderButtons extends Component {
  render() {

    return (
      <>
        <a href="http://https://www.instagram.com/shoungrufraina" target="_blank">
          <img src={insta} className="App-logo" alt="logo" />
        </a>
        <a href="https://www.facebook.com/shoungruf.raina" target="_blank">
          <img src={fb} className="App-logo" alt="logo" />
        </a>
        <a href="https://github.com/shoungruf" target="_blank">
          <img src={github} className="App-logo" alt="logo" />
        </a>
        <a class="mailto" href="mailto:shoungrufraina@gmail.com" target="_blank">
          <img src={mail} className="App-logo" alt="logo" />
        </a>
        <a  href="https://in.pinterest.com/shoungruf/" target="_blank">
          <img src={pinterest} className="App-logo" alt="logo" />
        </a>
        <a href="https://www.behance.net/shoungruf" target="_blank">
          <img src={behance} className="App-logo" alt="logo" />
        </a>
        <a href="https://www.linkedin.com/in/shoungrufraina/" target="_blank">

    <img src={lnkedin} className="App-logo" alt="logo" />
        </a>
      </>
    ); 

    // ...
  }
}

export default FrameSliderButtons;