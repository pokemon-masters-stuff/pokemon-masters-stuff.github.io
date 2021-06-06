import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import PrivateRoute from './components/routing/PrivateRoute';
import BuildsDesktop from './components/builds/desktop/Builds';
import PopularBuilds from './components/builds/common/PopularBuilds';
import LikedBuilds from './components/builds/common/LikedBuilds';
import UsersBuilds from './components/builds/common/UsersBuilds';
import BuildsMobile from './components/builds/mobile/Builds';
import TeamsDesktop from './components/teams/desktop/Teams';
import PopularTeams from './components/teams/common/PopularTeams';
import LikedTeams from './components/teams/common/LikedTeams';
import UsersTeams from './components/teams/common/UsersTeams';
import TeamsMobile from './components/teams/mobile/Teams';
import { theme, darkTheme } from './theme';
import { useSelector } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/actionCreators';
import withTracker from './utils/withTracker';
import Box from '@material-ui/core/Box';
import { NavigationDesktop, NavigationMobile } from './components/Navigation';
import { DarkModeToggleDesktop } from './components/DarkModeToggle';
import GachaOddsCalculator from './components/GachaOddsCalculator';
import EggPokemon from './components/EggPokemon';
import {
  TeamBuilderDesktop,
  TeamBuilderMobile,
} from './components/TeamBuilder';

export default function App({ store }) {
  const darkMode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Hidden smDown>
          <NavigationDesktop />
          <DarkModeToggleDesktop />
          <div style={{ marginTop: 64 }}>
            <Route exact path="/" component={withTracker(DesktopLayout)} />
            <Route
              exact
              path="/gacha-odds-calculator"
              component={withTracker(GachaOddsCalculator)}
            />
            <Route
              exact
              path="/egg-pokemon"
              component={withTracker(EggPokemon)}
            />
            <Route
              exact
              path="/team-builder"
              component={withTracker(TeamBuilderDesktop)}
            />
            <PrivateRoute
              path="/builds"
              screenSize={'large'}
              component={withTracker(BuildsDesktop)}
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
            <PrivateRoute
              path="/teams"
              screenSize={'large'}
              component={withTracker(TeamsDesktop)}
            />
            <div className="container container-s">
              <Box>
                <PrivateRoute
                  exact
                  path="/teams/popular"
                  screenSize={'large'}
                  component={PopularTeams}
                />
                <PrivateRoute
                  exact
                  path="/teams/liked"
                  screenSize={'large'}
                  component={LikedTeams}
                />
                <PrivateRoute
                  exact
                  path="/teams/users"
                  screenSize={'large'}
                  component={UsersTeams}
                />
              </Box>
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
          <NavigationMobile />
          <Box style={{ marginTop: 74 }}>
            <Route exact path="/" component={withTracker(MobileLayout)} />
            <Route
              exact
              path="/gacha-odds-calculator"
              component={withTracker(GachaOddsCalculator)}
            />
            <Route
              exact
              path="/egg-pokemon"
              component={withTracker(EggPokemon)}
            />
            <Route
              exact
              path="/team-builder"
              component={withTracker(TeamBuilderMobile)}
            />
            <PrivateRoute
              path="/builds"
              component={withTracker(BuildsMobile)}
            />
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
            <PrivateRoute path="/teams" component={withTracker(TeamsMobile)} />
            <PrivateRoute
              exact
              path="/teams/popular"
              screenSize={'small'}
              component={PopularTeams}
            />
            <PrivateRoute
              exact
              path="/teams/liked"
              screenSize={'small'}
              component={LikedTeams}
            />
            <PrivateRoute
              exact
              path="/teams/users"
              screenSize={'small'}
              component={UsersTeams}
            />
          </Box>
        </Hidden>
      </ThemeProvider>
    </HashRouter>
  );
}
