import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { DarkModeToggleMobile } from '../DarkModeToggle';
import styles from './styles';

const Nav = (props) => {
  const { classes, onOpenNavHandler } = props;

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
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          Sync Grid Helper
        </Link>
      </Typography>
      <DarkModeToggleMobile />
    </Toolbar>
  );
};

export default withStyles(styles)(Nav);
