import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional, if you’re using default styles
import App from './App'; // Importing the App component
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
