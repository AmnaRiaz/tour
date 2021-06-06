import React from 'react';
import ReactDOM from 'react-dom';
import Tour from './Tour';
import './index.css';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.render(
  <>
  <BrowserRouter>
  <Tour/>
  </BrowserRouter>
  </>
  ,document.getElementById('root')
);


