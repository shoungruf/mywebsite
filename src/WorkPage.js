import React, { Component } from 'react';
import './App.css';


class WorkPage extends Component {
    render() {
      
      return (
        <header className="App-Frame">

        <div className="white-page">
<div className="Cards-custom">
           <div class="Cards-customcontainer">
            {/* put the image of card  */}
            <img class="card-img-top" src="{insta}" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Website for Self  </h5>
              <p class="card-text"> Designed and Developed Website</p>
              <a href="#" class="btn btn-primary">Home</a>
            </div>
          </div>
       
        <div class="Cards-customcontainer">
          {/* put the image of card  */}
          <img class="card-img-top" src="{insta}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Website for kush  </h5>
            <p class="card-text"> Designed and Developed Website</p>
            <a href="#" class="btn btn-primary">Home</a>
          </div>
        </div>

        <div class="Cards-customcontainer">
          {/* put the image of card  */}
          <img class="card-img-top" src="{insta}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Website for bleh  </h5>
            <p class="card-text"> Designed and Developed Website</p>
            <a href="#" class="btn btn-primary">Home</a>
          </div>
        </div>
       
        </div> 
        </div>

      </header>

      );
  
      // ...
    }
  }
  
  export default WorkPage; 