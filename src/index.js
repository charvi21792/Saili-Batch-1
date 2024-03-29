import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import EmployeeActionApp from './Employee/EmployeeActions'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <EmployeeActionApp />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

