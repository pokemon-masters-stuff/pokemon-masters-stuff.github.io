import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const SubToolbar = props => {
  const { classes, data } = props;
  const darkMode = useSelector(state => state.darkMode.mode);

  return (
    <Toolbar className={classes.subToolbar}>
      <Typography
        variant="body1"
        className={classes.title}
        color={darkMode ? 'textPrimary' : 'inherit'}
      >
        Remaining Energy: {data.energy}
      </Typography>
      <Typography
        variant="body1"
        className={classes.title}
        color={darkMode ? 'textPrimary' : 'inherit'}
      >
        Orbs Spent: {Boolean(data && data.orbs > -1) && data.orbs}
      </Typography>
    </Toolbar>
  );
};

export default SubToolbar;
