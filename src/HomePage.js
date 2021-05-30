import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
 
  import FrameSliderButtons from './FrameSliderButtons';
// import AboutPage from './AboutPage';
// import WorkPage from './WorkPage';
// import ResumePage from './ResumePage';
// import BlogPage from './BlogPage';
// import ContactPage from './ContactPage';

class HomePage extends Component {
  render() {    
      return ( 
      <div className = 'App-Frame'>
        <div class="line"></div>
        <div class="container">    
          <div class="row">
            <div class="col-md-1" >
            {/* TODO: Frame slider buttons not in line */}
              <FrameSliderButtons/>
            </div>
            <div class="col-md-6">
              <text className="TitleClass" > Shoungruf Raina </text>
            </div>
          </div>
        </div>
        <div class="line"></div> 
      </div>
    );
  }
}
export default HomePage; 
  