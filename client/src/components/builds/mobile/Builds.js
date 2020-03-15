import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, changeSort } from '../../../actions/actionCreators';
import { pokemonNameList } from '../../../data';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TabPanel from '../TabPanel';
import PopularBuilds from './PopularBuilds';
import LikedBuilds from './LikedBuilds';
import UsersBuilds from './UsersBuilds';
import ScrollButton from '../ScrollButton';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../../MainAppbar/Nav';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
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
      <AppBar position="static">
        <Nav />
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChangeTab}
          style={{ margin: 'auto' }}
          centered
        >
          <Tab label="Popular" />
          <Tab label="Liked" />
          <Tab label="My" />
        </Tabs>
      </AppBar>

      <Box className={classes.root}>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          color="primary"
          style={{ marginRight: 10 }}
        >
          <InputLabel id="sort">Sort</InputLabel>
          <Select value={sort} labelId="sort" onChange={handleChangeSort}>
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          color="primary"
          style={{ marginLeft: 10 }}
        >
          <InputLabel id="filter">Filter</InputLabel>
          <Select value={filter} labelId="filter" onChange={handleChangeFilter}>
            <MenuItem value="None">None</MenuItem>
            {pokemonNameList.map((pokemon, index) => (
              <MenuItem key={index} value={pokemon.name}>
                {pokemon.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TabPanel index={0} value={value}>
        <PopularBuilds />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <LikedBuilds />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <UsersBuilds />
      </TabPanel>
      <ScrollButton scrollStepInPx="150" delayInMs="10" />
    </div>
  );
};

export default Builds;
