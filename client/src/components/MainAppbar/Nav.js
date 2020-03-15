import React from 'react';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { DarkModeToggleMobile } from '../DarkModeToggle';
import { AnnouncementModalMobile } from '../AnnouncementModal';
import styles from './styles';

const Nav = props => {
  const { classes, onOpenNavHandler, onAnnouncementClickHandler } = props;

  const handleOnOpenNav = () =>
    typeof onOpenNavHandler === 'function' ? onOpenNavHandler() : null;

  return (
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleOnOpenNav}
        style={{ marginRight: 0, paddingRight: 12, paddingLeft: 6 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Sync Grid Helper
      </Typography>
      <AnnouncementModalMobile handleClick={onAnnouncementClickHandler} />
      <DarkModeToggleMobile />
    </Toolbar>
  );
};

export default withStyles(styles)(Nav);
