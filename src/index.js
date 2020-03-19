import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { UA_ID } from './utils/constants';
import './index.css';
import App from './App.js';

const middleware = [thunk];

const persistConfig = {
  key: 'root',
  version: 0,
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

let currentState;

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage
  if (previousState && previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    token
      ? localStorage.setItem('token', token)
      : localStorage.removeItem('token');
  }
});

const persistor = persistStore(store);

ReactGA.initialize(UA_ID);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App store={store} />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
