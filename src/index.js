import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import "mdbreact/dist/css/mdb.css";


ReactDOM.render(
  
  <Router> 
  <App />
  </Router>
,
  document.getElementById('root')
);

