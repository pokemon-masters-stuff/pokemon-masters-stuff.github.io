import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, changeSort } from '../../actions/actionCreators';
import { pokemonNameList } from '../../data';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TabPanel from './TabPanel';
import PopularBuilds from './PopularBuilds';
import LikedBuilds from './LikedBuilds';
import UsersBuilds from './UsersBuilds';
import ScrollButton from './ScrollButton';
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
  const sort = useSelector(state => state.grid.sort);
  const filter = useSelector(state => state.grid.filter);
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.mode);

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
            <Tab label="My Published Builds" />
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
            <Select value={sort} labelId="sort" onChange={handleChangeSort}>
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
              value={filter}
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
      <ScrollButton scrollStepInPx="150" delayInMs="10" />
    </div>
  );
};

export default Builds;
