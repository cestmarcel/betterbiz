<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubmitBus from './pages/submitBus'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <Router>
      {/* <Navbar />
      <Jumbotron />
      <Route exact path="/" component={SaveBook} />
      <Route exact path="/savebook" component={SaveBook} /> */}
      <Route path="/submit" component={SubmitBus} />
    </Router>
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Services from "./componets/Services";
import "./App.css";
import Header from "./componets/Header";
import Navbar from "./componets/Navbar";
import Submit from "./componets/Submit";
import AboutUs from "./componets/AboutUs";
import SignUp from "./componets/SignUp";
import Map from "./componets/Map";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Header />
          <Services />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
      </Router>
      <Map />
    </>
>>>>>>> sadiia
  );
}

export default App;
