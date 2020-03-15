import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import styles from './styles';
import Nav from './Nav';
import SubToolbar from './SubToolbar';

function MainAppbar(props) {
  return (
    <AppBar position="fixed">
      <Nav {...props} />
      <SubToolbar {...props} />
    </AppBar>
  );
}

export default withStyles(styles)(MainAppbar);
