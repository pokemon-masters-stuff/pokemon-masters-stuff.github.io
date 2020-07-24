// TODO: to combine this with its conterpart in sync grid page

import React from "react";
import { withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./styles";
// import { useSelector, useDispatch } from 'react-redux';
// import { setSyncLevel, updateUrl } from "../../actions/actionCreators";

const syncLevelList = ["5", "4", "3", "2", "1"];

function SyncLevelDropdown(props) {
  //   const dispatch = useDispatch();
  const { classes, onChangeSyncLevel, syncLevel } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  //   const syncLevel = useSelector((state) => state.grid.syncLevel);
  //   const pokemon = useSelector((state) => state.pokemon.selectedPokemon);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    // dispatch(setSyncLevel(event.target.value));
    // dispatch(updateUrl(pokemon));
    onChangeSyncLevel(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-sync-level">
        Sync
      </InputLabel>
      <Select
        labelId="select-sync-level"
        value={syncLevel}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {syncLevelList.map((level, index) => (
          <MenuItem key={index} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SyncLevelDropdown);
