import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import { UA_ID } from './utils/constants';
import './index.css';

const persistConfig = {
  key: 'root',
  // TODO: remove blacklisting, was added temporarily while plugging in the new grids
  blacklist: ["grid"],
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware())
);

const persistor = persistStore(store);

ReactGA.initialize(UA_ID);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Hidden smDown>
          <DesktopLayout />
        </Hidden>
        <Hidden mdUp>
          <MobileLayout />
        </Hidden>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
