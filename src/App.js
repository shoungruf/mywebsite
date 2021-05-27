import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


export default function BasicExample() {
  return (
    <Router>
      <div >
        <header className="App-Frame">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <Link to="/" className="Header-buttons" >Home</Link>
              </div>
              <div class="col-md-4">

                <Link to="/about" className="Header-buttons" >About</Link>
              </div>
              <div class="col-md-4">

                <Link to="/dashboard" className="Header-buttons">Work</Link>

              </div>
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
              {/* <Button /> */}
            </Route>
            <Route path="/about">
              <Button />
            </Route>
            <Route path="/dashboard">
              {/* <Button /> */}
            </Route>
          </Switch>
        </header>

      </div>

    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
