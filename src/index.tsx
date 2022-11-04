import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import newsReducer from './redux/states/newsState';
import newsSaga from './redux/sagas/newsSaga';

// initialize saga
const saga = createSagaMiddleware()

// initialize redux-toolkit store
const store = configureStore({
  reducer: {
    newsReducer: newsReducer
  },
  middleware: [saga]
})

saga.run(newsSaga)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
