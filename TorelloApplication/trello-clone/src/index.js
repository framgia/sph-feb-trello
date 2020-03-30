import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Store from './store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);