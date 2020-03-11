import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import { NavigationDesktop } from './components/Navigation';
import Routes from './components/routing/Routes';
import { theme, darkTheme } from './theme';
import { useSelector } from 'react-redux';
import { Divider } from '@material-ui/core';

export default function App() {
  const darkMode = useSelector(state => state.darkMode.mode);
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
