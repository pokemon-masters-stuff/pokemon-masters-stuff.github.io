import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeFilter, changeSort } from "../../../actions/actionCreators";
import { getPokemonNameList } from "../../../utils/functions";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../../MainAppbar/Nav";
import { NavigationMobile } from "../../Navigation";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 2000,
  },
});

const Builds = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isNavOpened, setIsNavOpened] = React.useState(false);
  const sort = useSelector((state) => state.build.sort);
  const filter = useSelector((state) => state.build.filter);
  const language = useSelector((state) => state.language.currentLanguage);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.mode);

  useEffect(() => {
    if (props.history) {
      if (props.history.location.pathname === "/builds/liked") {
        setValue(1);
      } else if (props.history.location.pathname === "/builds/users") {
        setValue(2);
      } else {
        setValue(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnCloseNav = () => setIsNavOpened(false);

  const handleOnOpenNav = () => setIsNavOpened(true);

  const handleChangeTab = (event, newValue) => {
    let val;
    if (newValue === 0) {
      val = "popular";
    } else if (newValue === 1) {
      val = "liked";
    } else {
      val = "users";
    }
    props.history.push(`/builds/${val}`);
    setValue(newValue);
  };

  const handleChangeSort = (event) => {
    dispatch(changeSort(event.target.value));
  };

  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : null}`}>
      <AppBar position="fixed">
        <Nav onOpenNavHandler={handleOnOpenNav} />
        <NavigationMobile
          isOpened={isNavOpened}
          onCloseHandler={handleOnCloseNav}
        />{" "}
      </AppBar>
      <Tabs
        value={value}
        indicatorColor="primary"
        onChange={handleChangeTab}
        style={{ margin: "auto" }}
        centered
      >
        <Tab label="Popular" />
        <Tab label="Liked" />
        <Tab label="My" />
      </Tabs>

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
          <InputLabel id="filter">Filter by</InputLabel>
          <Select value={filter} labelId="filter" onChange={handleChangeFilter}>
            <MenuItem value="None">None</MenuItem>
            {getPokemonNameList(language).map((pokemon, index) => (
              <MenuItem key={index} value={pokemon.name}>
                {pokemon.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
