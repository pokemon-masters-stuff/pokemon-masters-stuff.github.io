import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBuilds } from '../../actions/actionCreators';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import TabPanel from './TabPanel';
import PopularBuilds from './PopularBuilds';
import LikedBuilds from './LikedBuilds';
import UsersBuilds from './UsersBuilds';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex'
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
        <Paper width={1} className={classes.root}>
          <span style={{ position: 'absolute' }}>
            <IconButton>
              <FilterListIcon />
            </IconButton>
            <IconButton>
              <SortIcon />
            </IconButton>
          </span>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            style={{ margin: 'auto' }}
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
