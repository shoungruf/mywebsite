import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
     Link
  } from "react-router-dom";
  // import {Link} from 'react-scroll';
  import FrameSliderButtons from './FrameSliderButtons';
   import AboutPage from './AboutPage';
// import WorkPage from './WorkPage';
// import ResumePage from './ResumePage';
// import BlogPage from './BlogPage';
// import ContactPage from './ContactPage';

class HomePage extends Component {
    render() {
      
      return (
        <Router>
       
          <header className="App-Frame">
          <div class="container">              
              <div class="row">
              <div class="col-md-6">
               
               <Link to="/" className="Header-buttons" >Home</Link>
               </div>
               <div class="col-md-1">
               
               <Link to="/about" className="Header-buttons" >About</Link>
               </div>
               <div class="col-md-1">
               
               <Link to="/work" className="Header-buttons">Work</Link>
               
               </div>
               <div class="col-md-1">
               
               <Link to="/resume" className="Header-buttons">Resume</Link>
               
               </div>
               <div class="col-md-1">
               
               <Link to="/blog" className="Header-buttons">Blog</Link>
               
               </div>
               <div class="col-md-1">
               
               <Link to="/contact" className="Header-buttons">Contact</Link>
               
               </div>
                            <div class="line"></div>
                <div class="container">    
  
          <div class="row">
          <div class="col-md-1" >
            {/* TODO: Frame slider buttons not in line */}
          <FrameSliderButtons/>
          </div><div class="col-md-3">
            <text className="TitleClass" > Shoungruf Raina </text>
          </div>
          </div>
          </div>
                
                <div class="line"></div>
              </div>
            </div>
  
            {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
            <Switch>
            <Route exact path="/">
           
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/work">
               {/* <WorkPage/> */}
              </Route>
              <Route path="/resume">
                {/* <ResumePage/> */}
              </Route>
              <Route path="/blog">
                {/* <BlogPage/> */}
              </Route>
              <Route path="/contact">
              {/* <ContactPage/> */}
              </Route>
            </Switch>
          </header>
  
       
  
      </Router>
    );
    }}
  
  // function Home() {
  //   return (
  //     <div>
  //       <h2>Home</h2>
  //       <HomePage/>
  //     </div>
  //   );
  // }
  
  // function About() {
  //   return (
  //     <div>
  //       <h2>About</h2>
  //       <AboutPage/>
  //     </div>
  //   );
  // }
  
  // function Work() {
  //   return (
  //     <div>
  //       <h2>Work</h2>
  //       <WorkPage/>
  //     </div>
  //   );
  // }
  // function Resume() {
  //   return (
  //     <div>
  //       <h2>Resume</h2>
  //       <ResumePage/>
  //     </div>
  //   );
  // }function Blog() {
  //   return (
  //     <div>
  //       <h2>Blog</h2>
  //       <BlogPage/>
  //     </div>
  //   );
  //   function Contact() {
  //     return (
  //       <div>
  //         <h2>Contact</h2>
  //         <ContactPage/>
  //       </div>
  //     );
  //   }
  // }
  export default HomePage; 
  