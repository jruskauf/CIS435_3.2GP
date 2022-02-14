import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import "./index.css"

//You NEED to encompass the App/Main js file in a 
//BrowserRouter component for 'Route' and 'Routes' to work
//
//Additionally, run 'npm add react-router-dom@6' to get the
//working components for this project

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

