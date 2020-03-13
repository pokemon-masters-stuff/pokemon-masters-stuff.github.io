import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import { NavigationDesktop } from './components/Navigation';
import Routes from './components/routing/Routes';
import { theme, darkTheme } from './theme';
import { useSelector } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/actionCreators';

export default function App({ store }) {
  const darkMode = useSelector(state => state.darkMode.mode);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Hidden smDown>
          <NavigationDesktop />
          <Switch>
            <Route exact path="/" component={DesktopLayout} />
            <Route component={Routes} />
          </Switch>
        </Hidden>
        <Hidden mdUp>
          <Switch>
            <Route exact path="/" component={MobileLayout} />
          </Switch>
        </Hidden>
      </ThemeProvider>
    </Router>
  );
}
