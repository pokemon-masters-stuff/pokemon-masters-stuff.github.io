import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { FeedbackFormMobile } from '../FeedbackForm';
import styles from './styles';
import { logout } from '../../actions/actionCreators';

function Navigation(props) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleOnClickLogout = () => {
    dispatch(logout());
  };
  const [open, setOpen] = useState(false);

  const { classes, isOpened, onCloseHandler } = props;

  const handleOnClose = () =>
    typeof onCloseHandler === 'function' ? onCloseHandler() : null;

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Drawer open={isOpened} onClose={handleOnClose}>
      <List className={classes.listRoot}>
        <ListItem button onClick={handleClickOpenModal}>
          <ListItemIcon className={classes.listIcon}>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Submit Feedback" />
        </ListItem>
        <FeedbackFormMobile
          open={open}
          onCloseModalHandler={handleCloseModal}
        />

        {isAuthenticated ? (
          <ListItem button onClick={handleOnClickLogout}>
            <ListItemIcon className={classes.listIcon}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <Fragment>
            <ListItem
              button
              onClick={handleOnClose}
              data-toggle="modal"
              data-target="#loginModal"
            >
              <ListItemIcon className={classes.listIcon}>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>

            <ListItem
              button
              onClick={handleOnClose}
              data-toggle="modal"
              data-target="#registerModal"
            >
              <ListItemIcon className={classes.listIcon}>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </Fragment>
        )}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigation);
