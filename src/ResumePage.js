import React, { Component } from 'react';
import './App.css';

class ResumePage extends Component {
    render() {
      
      return (
        <header className="App-Frame">

        <div className="white-page">
        <iframe src="https://github.com/shoungruf/mywebsite/tree/master/src/cv3.pdf" width="100%" height="100%"></iframe>
        {/* <embed src="./cv3.pdf" width="500" height="375" 
 type="application/pdf"></embed> */}
        </div>

      </header>
      );
  
      // ...
    }
  }
  
  export default ResumePage; 