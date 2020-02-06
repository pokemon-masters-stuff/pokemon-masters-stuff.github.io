import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';
import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import theme from "./theme";
import {UA_ID} from "./utils/constants";

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware()));

ReactGA.initialize(UA_ID);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Hidden smDown>
        <DesktopLayout />
      </Hidden>
      <Hidden mdUp>
        <MobileLayout />
      </Hidden>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
