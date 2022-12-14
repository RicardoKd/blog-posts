import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/Store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (container != null) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Root entrypoint not found');
}
