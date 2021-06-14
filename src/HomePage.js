import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import FrameSliderButtons from './FrameSliderButtons';
import FrameSliderBottomButton from './FrameSliderBottomButton';
import dp from "./SliderButtons/IMG_1666.jpeg"

class HomePage extends Component {
  render() {
    
    return (
      

      <div className='App-Frame container-image'>
         
        <div class="container container-image">

          <div class="col-md-1" >
            <div class="line"></div>
          </div>
          <div class="col-md-6" >
            <div class="container">
              <div class="row">
                <div class="col-md-3 marginNeg2em" >
                  {/* {/* TODO: Frame slider buttons not in line */}
                  <FrameSliderButtons />

                </div>
                <div class="col-md-7">
                  <text className="TitleClass" > Shoungruf Raina </text>
                 
                  <text className="TitleClassDesc"> Designer and Developer</text>
                </div>

               
                
              </div>
            </div>

          </div>
          <div class="col-md-1" >
            <div class="line"></div>
          </div>
        </div>

      </div>
      

    );
  }
}
export default HomePage;
