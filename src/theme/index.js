import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343a40'
    },
    secondary: {
      main: '#d33737'
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});
