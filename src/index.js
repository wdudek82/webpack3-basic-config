import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const AppRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(AppRouter, document.getElementById('root'));
