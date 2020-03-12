import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import BuildItem from './BuildItem';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Builds = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const builds = useSelector(state => state.grid.builds);
  const darkMode = useSelector(state => state.darkMode.mode);
  useEffect(() => {
    dispatch(getBuilds());
  }, [getBuilds]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : null}`}>
      <div className="container container-s">
        <br />
        <Paper className={classes.root}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="white"
            onChange={handleChange}
            centered
          >
            <Tab label="Popular Builds" />
            <Tab label="Liked Builds" />
            <Tab label="My Publised Builds" />
          </Tabs>
        </Paper>
        {builds.map(build => (
          <BuildItem key={build._id} build={build} />
        ))}
      </div>
    </div>
  );
};

export default Builds;
