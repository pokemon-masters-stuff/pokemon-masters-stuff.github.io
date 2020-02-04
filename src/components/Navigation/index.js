import React from 'react';
import {withStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FeedbackIcon from '@material-ui/icons/Feedback';

import styles from "./styles";

function Navigation(props) {
  const {classes, isOpened, onCloseHandler} = props;

  const handleOnClose = () => (typeof onCloseHandler === "function") ? onCloseHandler() : null;

  return (
    <Drawer open={isOpened} onClose={handleOnClose}>
      <List className={classes.listRoot}>
        <ListItem button>
          <ListItemIcon className={classes.listIcon}><FeedbackIcon /></ListItemIcon>
          <ListItemText primary="Submit Feedback" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigation);
