import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './logs/Signup';
import Login from './logs/Login';
import NavBar from './components/NavBar';
import Footer from './components/footer';


ReactDOM.render(
  
  <Router>
  
  <App />
  <Footer />
  </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
