import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeFilter, changeSort } from "../../../actions/actionCreators";
import { getPokemonNameList } from "../../../utils/functions";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// import UI from '../../../utils/translations';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Builds = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const sort = useSelector((state) => state.build.sort);
  const filter = useSelector((state) => state.build.filter);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
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
      <div className="container container-s">
        <br />
        <Paper width={1} className={classes.root}>
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChangeTab}
            style={{ margin: "auto" }}
            centered
          >
            <Tab label="Popular Builds" />
            <Tab label="Liked Builds" />
            <Tab label="My Published Builds" />
          </Tabs>
        </Paper>
        <Paper width={1} className={classes.root} style={{ marginBottom: 20 }}>
          <Typography
            style={{
              borderLeft: "15px solid transparent",
              borderRight: "10px solid transparent",
            }}
          >
            Sort by:{" "}
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
              borderLeft: "35px solid transparent",
              borderRight: "10px solid transparent",
            }}
          >
            Filter by:{" "}
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              value={filter}
              labelId="filter"
              onChange={handleChangeFilter}
            >
              <MenuItem value="None">None</MenuItem>
              {getPokemonNameList(language).map((pokemon, index) => (
                <MenuItem key={index} value={pokemon.name}>
                  {pokemon.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Paper>
      </div>
    </div>
  );
};

export default withRouter(Builds);
