import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MobileLayout from './containers/MobileLayout';
import DesktopLayout from './containers/DesktopLayout';
import { theme, darkTheme } from './theme';
import { useSelector } from 'react-redux';

export default function App() {
  const darkMode = useSelector(state => state.darkMode.mode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Hidden smDown>
        <DesktopLayout />
      </Hidden>
      <Hidden mdUp>
        <MobileLayout />
      </Hidden>
    </ThemeProvider>
  );
}
