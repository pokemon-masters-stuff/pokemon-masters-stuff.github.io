import React from 'react';
import { withStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FeedbackIcon from '@material-ui/icons/Feedback';

import { FeedbackFormMobile } from '../FeedbackForm';

import styles from './styles';

function Navigation(props) {
  const [open, setOpen] = React.useState(false);

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
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigation);
