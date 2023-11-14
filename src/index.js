import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './views/Root';

const root = document.getElementById('root');

// Use createRoot to render the app
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
