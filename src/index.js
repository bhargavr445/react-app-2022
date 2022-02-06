import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.interceptors.request.use(req => {
  console.log(req);
  req.headers.Authorization = `Bearer ${localStorage.getItem('Authorization')}`
  return req;
});

axios.interceptors.response.use(resp => {
  console.log(resp);
  return resp;
});

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
