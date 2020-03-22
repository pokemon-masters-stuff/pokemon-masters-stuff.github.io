import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import { NavigationDesktop } from './components/Navigation';
import { DarkModeToggleDesktop } from './components/DarkModeToggle';
import PrivateRoute from './components/routing/PrivateRoute';
import BuildsDesktop from './components/builds/desktop/Builds';
import PopularBuilds from './components/builds/common/PopularBuilds';
import LikedBuilds from './components/builds/common/LikedBuilds';
import UsersBuilds from './components/builds/common/UsersBuilds';
import BuildsMobile from './components/builds/mobile/Builds';
import { theme, darkTheme } from './theme';
import { useSelector } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/actionCreators';
import Box from '@material-ui/core/Box';

export default function App({ store }) {
  const darkMode = useSelector(state => state.darkMode.mode);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Hidden smDown>
          <NavigationDesktop />
          <DarkModeToggleDesktop />
          <Route exact path="/" component={DesktopLayout} />
          <PrivateRoute
            path="/builds"
            screenSize={'large'}
            component={BuildsDesktop}
          />
          <div className="container container-s">
            <Box>
              <PrivateRoute
                exact
                path="/builds/popular"
                screenSize={'large'}
                component={PopularBuilds}
              />
              <PrivateRoute
                exact
                path="/builds/liked"
                screenSize={'large'}
                component={LikedBuilds}
              />
              <PrivateRoute
                exact
                path="/builds/users"
                screenSize={'large'}
                component={UsersBuilds}
              />
            </Box>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Box>
            <Route exact path="/" component={MobileLayout} />
            <PrivateRoute path="/builds" component={BuildsMobile} />
            <PrivateRoute
              exact
              path="/builds/popular"
              screenSize={'small'}
              component={PopularBuilds}
            />
            <PrivateRoute
              exact
              path="/builds/liked"
              screenSize={'small'}
              component={LikedBuilds}
            />
            <PrivateRoute
              exact
              path="/builds/users"
              screenSize={'small'}
              component={UsersBuilds}
            />
          </Box>
        </Hidden>
      </ThemeProvider>
    </HashRouter>
  );
}
