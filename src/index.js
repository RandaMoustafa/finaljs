import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App';
import './assets/scss/style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


