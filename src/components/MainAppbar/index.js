import React from 'react';
import {withStyles} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import styles from "./styles";

function MainAppbar(props) {
  const {classes, onOpenNavHandler, data} = props;

  const handleOnOpenNav = () => (typeof onOpenNavHandler === "function") ? onOpenNavHandler() : null;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleOnOpenNav}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Sync Grid Helper
        </Typography>
      </Toolbar>

      <Toolbar className={classes.subToolbar}>
        <Typography variant="body1" className={classes.title}>
          Remaining Energy: {Boolean(data && data.energy > -1) && data.energy}
        </Typography>
        <Typography variant="body1" className={classes.title}>
          Orbs Spent: {Boolean(data && data.orbs > -1) && data.orbs}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(MainAppbar);
