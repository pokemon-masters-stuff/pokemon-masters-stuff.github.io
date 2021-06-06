import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  changeTeamSyncPairFilter,
  changeTeamSyncLevelFilter,
  changeTeamSort,
} from '../../../actions/actionCreators';
import {
  getPokemonNameList,
  getNewPokemonNameList,
} from '../../../utils/functions';
import ListSubheader from '@material-ui/core/ListSubheader';
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

const Teams = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [isNavOpened, setIsNavOpened] = React.useState(false);
  const sort = useSelector((state) => state.team.sort);
  const syncPairFilter = useSelector((state) => state.team.syncPairFilter);
  const syncLevelFilter = useSelector((state) => state.team.syncLevelFilter);
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    if (props.history) {
      if (props.history.location.pathname === '/teams/liked') {
        setValue(1);
      } else if (props.history.location.pathname === '/teams/users') {
        setValue(2);
      } else {
        setValue(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleOnCloseNav = () => setIsNavOpened(false);

  // const handleOnOpenNav = () => setIsNavOpened(true);

  const handleChangeTab = (event, newValue) => {
    let val;
    if (newValue === 0) {
      val = 'popular';
    } else if (newValue === 1) {
      val = 'liked';
    } else {
      val = 'users';
    }
    props.history.push(`/teams/${val}`);
    setValue(newValue);
  };

  const handleChangeSort = (event) => {
    if (event.target.value) {
      dispatch(changeTeamSort(event.target.value));
    }
  };

  const handleChangeSyncPairFilter = (event) => {
    if (event.target.value) {
      dispatch(changeTeamSyncPairFilter(event.target.value));
      dispatch(changeTeamSyncLevelFilter('0'));
    }
  };

  const handleChangeSyncLevelFilter = (event) => {
    if (event.target.value) {
      dispatch(changeTeamSyncLevelFilter(event.target.value));
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
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formControl}
          color="primary"
          style={{ marginLeft: 10 }}
        >
          <InputLabel id="syncPairFilter">Filter by</InputLabel>
          <Select
            value={syncPairFilter}
            labelId="syncPairFilter"
            onChange={handleChangeSyncPairFilter}
          >
            <MenuItem value="None">---</MenuItem>
            <ListSubheader disableSticky={true}>New</ListSubheader>
            {getNewPokemonNameList(language).map((pokemon, index) => (
              <MenuItem key={index} value={pokemon.name}>
                {pokemon.value}
              </MenuItem>
            ))}
            <ListSubheader disableSticky={true}>All</ListSubheader>
            {getPokemonNameList(language).map((pokemon, index) => (
              <MenuItem key={index} value={pokemon.name}>
                {pokemon.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {syncPairFilter !== 'None' ? (
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

export default withRouter(Teams);
