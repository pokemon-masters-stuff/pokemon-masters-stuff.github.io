import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel';
import PopularBuilds from './PopularBuilds';
import LikedBuilds from './LikedBuilds';
import UsersBuilds from './UsersBuilds';
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
            onChange={handleChange}
            centered
          >
            <Tab label="Popular Builds" />
            <Tab label="Liked Builds" />
            <Tab label="My Builds" />
          </Tabs>
        </Paper>
        <TabPanel index={0} value={value}>
          <PopularBuilds />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <LikedBuilds />
        </TabPanel>
        <TabPanel index={2} value={value}>
          <UsersBuilds />
        </TabPanel>
      </div>
    </div>
  );
};

export default Builds;
