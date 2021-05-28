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
  
class AboutPage extends Component {
    render() {
      
      return (
       
       
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
            </div>
           
            </div>
            
            
            </header>


      
           );
      
  
      // ...
    }
  }
  
  export default AboutPage; 
  