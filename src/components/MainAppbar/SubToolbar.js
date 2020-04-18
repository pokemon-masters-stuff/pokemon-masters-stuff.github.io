import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import UI from '../../utils/translations';

const SubToolbar = (props) => {
  const { classes, data } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <Toolbar className={classes.subToolbar}>
      <Typography
        variant="body1"
        className={classes.title}
        color={darkMode ? 'textPrimary' : 'inherit'}
      >
        {UI['Remaining Energy'][language]}: {data.energy}
      </Typography>
      <Typography
        variant="body1"
        className={classes.title}
        color={darkMode ? 'textPrimary' : 'inherit'}
      >
        {UI['Orbs Spent'][language]}:{' '}
        {Boolean(data && data.orbs > -1) && data.orbs}
      </Typography>
    </Toolbar>
  );
};

export default SubToolbar;
