import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from './Button';
// import HomePage from './HomePage';
// import WorkPage from './WorkPage';
// import ResumePage from './ResumePage';
// import BlogPage from './BlogPage';
// import ContactPage from './ContactPage';

import insta from './SliderButtons/InstaIcon.svg';

class AboutPage extends Component {
  render() {

    return (


      <header className="App-Frame">

        <div className="white-page">
        <div class="container container-image">
          <text className="PageHeaders"> About</text>
          <text className="PageDetails">
            I am really uncomfortable sharing about myself in public.
            I would say I have mastered the art of “not letting anyone know”.
           
            But today, I would share a little bit.

            I am software developer turning to visual designer. I like to draw animes and illustrate characters in the same genre.
            I have interest in photography.
            I am passionate about CrossFit and weight lifting.
            I do enjoy working on front end programing.
           </text>
           </div>


          
        </div>

      </header>



    );


    // ...
  }
}

export default AboutPage;
