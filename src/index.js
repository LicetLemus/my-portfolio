import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

// Import your SCSS file here
import './styles/styles.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);