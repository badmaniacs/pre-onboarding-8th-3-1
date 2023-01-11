import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { FocusContextProvider } from './store/focus-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FocusContextProvider>
      <App />
    </FocusContextProvider>
  </React.StrictMode>
);
