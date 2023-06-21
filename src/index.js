import React from 'react';
import { creatRoot } from 'react-dom/client';
import './index.css';
import App from './App/App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
