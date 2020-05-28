import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DRAWER_WIDTH } from '../../utils/constants';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FeedbackIcon from '@material-ui/icons/Feedback';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FeedbackForm from '../FeedbackForm';
import { logout } from '../../actions/actionCreators';
import AnnouncementModal from '../AnnouncementModal';
import ContributeModal from '../ContributeModal';
import LanguageModal from '../LanguageModal';
import UI from '../../utils/translations';

import HomeIcon from '@material-ui/icons/Home'; // for Sync Grid Helper home page
import ViewColumnIcon from '@material-ui/icons/ViewColumn'; // for teams

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function PersistentDrawerLeft() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  const handleOnClickLogout = () => {
    dispatch(logout());
  };
  const classes = useStyles();
  const theme = useTheme();

  const [isOpened, setisOpened] = React.useState(false);

  const onOpenHandler = () => {
    setisOpened(true);
  };

  const onCloseHandler = () => {
    setisOpened(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    onOpenHandler();
  };

  const handleDrawerClose = () => {
    onCloseHandler();
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpened,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, isOpened && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" noWrap>
              Sync Grid Helper
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isOpened}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={UI['Home'][language]} />
            </ListItem>
          </Link>

          {isAuthenticated ? (
            <Link
              to="/builds/popular"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem button>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary={UI['Popular Builds'][language]} />
              </ListItem>
            </Link>
          ) : (
            <ListItem
              button
              data-toggle="modal"
              data-target="#loginOrRegisterModal"
            >
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary={UI['Popular Builds'][language]} />
            </ListItem>
          )}
        </List>

        <Divider />
        <List className={classes.listRoot}>
          <AnnouncementModal classes={classes} />
          <ContributeModal classes={classes} />
          <ListItem button onClick={handleClickOpenModal}>
            <ListItemIcon className={classes.listIcon}>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary={UI['Submit Feedback'][language]} />
          </ListItem>
          <FeedbackForm open={open} onCloseModalHandler={handleCloseModal} />

          <LanguageModal classes={classes} />

          {isAuthenticated ? (
            <ListItem button onClick={handleOnClickLogout}>
              <ListItemIcon className={classes.listIcon}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            <Fragment>
              <ListItem button data-toggle="modal" data-target="#loginModal">
                <ListItemIcon className={classes.listIcon}>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary={UI['Login'][language]} />
              </ListItem>

              <ListItem button data-toggle="modal" data-target="#registerModal">
                <ListItemIcon className={classes.listIcon}>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={UI['Register'][language]} />
              </ListItem>
            </Fragment>
          )}
        </List>
      </Drawer>
    </div>
  );
}
