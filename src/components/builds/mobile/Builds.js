import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  changePokemonFilter,
  changeSyncLevelFilter,
  changeSort,
} from '../../../actions/actionCreators';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import Filter from '../common/Filter';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  bottomNav: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 2000,
  },
});

const Builds = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [isNavOpened, setIsNavOpened] = React.useState(false);
  const sort = useSelector((state) => state.build.sort);
  const pokemonFilter = useSelector((state) => state.build.pokemonFilter);
  const syncLevelFilter = useSelector((state) => state.build.syncLevelFilter);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    if (props.history) {
      if (props.history.location.pathname === '/builds/liked') {
        setValue(1);
      } else if (props.history.location.pathname === '/builds/users') {
        setValue(2);
      } else {
        setValue(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeTab = (event, newValue) => {
    let val;
    if (newValue === 0) {
      val = 'popular';
    } else if (newValue === 1) {
      val = 'liked';
    } else {
      val = 'users';
    }
    props.history.push(`/builds/${val}`);
    setValue(newValue);
  };

  const handleChangeSort = (event) => {
    if (event.target.value) {
      dispatch(changeSort(event.target.value));
    }
  };

  const handleChangePokemonFilter = (trainerId) => {
    if (trainerId) {
      dispatch(changePokemonFilter(trainerId));
      dispatch(changeSyncLevelFilter('0'));
    }
  };

  const handleChangeSyncLevelFilter = (event) => {
    if (event.target.value) {
      dispatch(changeSyncLevelFilter(event.target.value));
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : null}`}>
      <Box className={classes.root} style={{ marginBottom: 15 }}>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          color="primary"
          style={{ marginRight: 10 }}
        >
          <InputLabel id="sort">Sort by</InputLabel>
          <Select value={sort} labelId="sort" onChange={handleChangeSort}>
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>

        <Filter
          pokemonFilter={pokemonFilter}
          labelId="pokemonFilter"
          handleChangePokemonFilter={handleChangePokemonFilter}
          mode={'mobile'}
        />

        {pokemonFilter !== 'None' ? (
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
            color="primary"
            style={{ marginLeft: 5 }}
          >
            <InputLabel id="syncLevelLabel">Sync</InputLabel>
            <Select
              value={syncLevelFilter}
              labelId="syncLevelFilter"
              onChange={handleChangeSyncLevelFilter}
            >
              <MenuItem key={'0'} value={'0'}>
                ---
              </MenuItem>
              <MenuItem key={3} value={'3+'}>
                3+
              </MenuItem>
              <MenuItem key={2} value={'2'}>
                2
              </MenuItem>
              <MenuItem key={1} value={'1'}>
                1
              </MenuItem>
            </Select>
          </FormControl>
        ) : null}
      </Box>

      <BottomNavigation
        value={value}
        onChange={handleChangeTab}
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction label="Popular" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Liked" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="My" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default withRouter(Builds);
