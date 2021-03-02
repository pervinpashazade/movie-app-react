import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//style
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
// config
import configureAppStore from './store';
import { httpService } from './store/apiConfig';

import reportWebVitals from './reportWebVitals';

const store = configureAppStore();

httpService(store);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
