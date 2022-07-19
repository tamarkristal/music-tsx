import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { compose } from 'redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type AppDispatch = typeof store.dispatch
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
