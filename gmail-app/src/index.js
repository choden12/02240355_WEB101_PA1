// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Get the root element from the DOM (where the React app will be rendered)
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Call reportWebVitals to log performance metrics of the app
reportWebVitals();
