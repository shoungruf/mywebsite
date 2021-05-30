
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import ResumePage from './ResumePage';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/:page' component={Header} />
        <Route exact path='/' component={Header} />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/work' component={WorkPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/blog' component={BlogPage} />
        <Route exact path='/resume' component={ResumePage} />
      </Router>
    </div>
  );
}

export default App;