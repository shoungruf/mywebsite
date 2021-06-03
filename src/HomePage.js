// import React, { Component } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

// import FrameSliderButtons from './FrameSliderButtons';
// // import AboutPage from './AboutPage';
// // import WorkPage from './WorkPage';
// // import ResumePage from './ResumePage';
// // import BlogPage from './BlogPage';
// // import ContactPage from './ContactPage';

// class HomePage extends Component {
//   render() {
//     return (
//       <div className='App-Frame'>
//         <div class="container">

//           <div class="col-md-1" >
//             <div class="line"></div>
//           </div>
//           <div class="col-md-6" >
//             <div class="container">
//               <div class="row">
//                 <div class="col-md-3 marginNeg2em" >
//                   {/* {/* TODO: Frame slider buttons not in line */}
//                   <FrameSliderButtons />

//                 </div>
//                 <div class="col-md-4">
//                   <text className="TitleClass" > Shoungruf Raina </text>
//                   <text className="TitleClassDesc"> Designer and Developer</text>
//                 </div>
//               </div>
//               {/* <div class="row row-invisible">
//               <FrameSliderButtons />
//                 </div> */}
// <div class="col-md-1" >
//             <div class="line"></div>
//           </div>
//         </div>

//       </div>
//       </div>
//       </div>

//     );
//   }
// }
// export default HomePage;


import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import FrameSliderButtons from './FrameSliderButtons';
import FrameSliderBottomButton from './FrameSliderBottomButton';
import dp from "./SliderButtons/IMG_1666.jpeg"

// import AboutPage from './AboutPage';
// import WorkPage from './WorkPage';
// import ResumePage from './ResumePage';
// import BlogPage from './BlogPage';
// import ContactPage from './ContactPage';

class HomePage extends Component {
  render() {
    return (
      <div className='App-Frame'>
         
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
                <div class="col-md-9 centerAlign">
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