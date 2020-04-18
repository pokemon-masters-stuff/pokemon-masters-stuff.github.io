import React from 'react';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

function SelectedSkillList(props) {
  const {
    classes,
    isOpened,
    onOpenHandler,
    onCloseHandler,
    skillList,
    UI,
    language,
  } = props;

  const handleOnOpen = () =>
    typeof onOpenHandler === 'function' ? onOpenHandler() : null;

  const handleOnClose = () =>
    typeof onCloseHandler === 'function' ? onCloseHandler() : null;

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpened}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
    >
      <List dense className={classes.listRoot}>
        <Typography variant="h6" className={classes.listTitle}>
          {UI['Selected'][language]}
        </Typography>

        <Divider className={classes.listDivider} />

        {Boolean(skillList && skillList.length) &&
          skillList.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  );
}

export default withStyles(styles)(SelectedSkillList);
