import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Find the HTML element with the id 'root' to render the app into it
const rootElement = document.getElementById('root');

// Create a React root and render the App component inside it
const root = ReactDOM.createRoot(rootElement);

// Use StrictMode to enable additional checks and warnings
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render the app inside the root
root.render(app);
