<<<<<<< HEAD
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element= {<Home/>}/>
      <Route path = "/about" element ={<About/>}/>
      <Route path = "/project" element= {<Project/>}/>
      <Route path = "/contact" element ={<Contact/>}/>
    </Routes>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 762e871676482eb9f11a46616ef83e6f62a27f5b
  );
}

export default App;
