import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';
import App from './App';
import MobileLayout from './containers/MobileLayout';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import theme from "./theme";

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    {/*<App />*/}
    <MobileLayout />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
