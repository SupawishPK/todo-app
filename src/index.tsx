import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './components/Landing';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
