import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBuilds,
  changeFilter,
  changeSort
} from '../../actions/actionCreators';
import { pokemonNameList } from '../../data';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSort = event => {
    dispatch(changeSort(event.target.value));
  };

  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : null}`}>
      <div className="container container-s">
        <br />
        <Paper width={1} className={classes.root}>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChangeTab}
            style={{ margin: 'auto' }}
            centered
          >
            <Tab label="Popular Builds" />
            <Tab label="Liked Builds" />
            <Tab label="My Builds" />
          </Tabs>
        </Paper>
        <Paper width={1} className={classes.root}>
          <Typography
            style={{
              borderLeft: '15px solid transparent',
              borderRight: '10px solid transparent'
            }}
          >
            Sort by:{' '}
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              defaultValue="popular"
              labelId="sort"
              onChange={handleChangeSort}
            >
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
            </Select>
          </FormControl>
          <Typography
            style={{
              borderLeft: '35px solid transparent',
              borderRight: '10px solid transparent'
            }}
          >
            Filter by:{' '}
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              defaultValue="None"
              labelId="filter"
              onChange={handleChangeFilter}
            >
              <MenuItem value="None">None</MenuItem>
              {pokemonNameList.map((pokemon, index) => (
                <MenuItem key={index} value={pokemon.name}>
                  {pokemon.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
