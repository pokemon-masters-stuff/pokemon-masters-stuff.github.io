import React from "react";
import { withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./styles";

function RarityDropdown(props) {
  const { classes, rarity, selectedRarity, handleOnChangeRarity } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  let rarityLevelList;
  if (rarity === 1) {
    rarityLevelList = ["★", "★★", "★★★", "★★★★", "★★★★★"];
  } else if (rarity === 2) {
    rarityLevelList = ["★★", "★★★", "★★★★", "★★★★★"];
  } else if (rarity === 3) {
    rarityLevelList = ["★★★", "★★★★", "★★★★★"];
  } else if (rarity === 4) {
    rarityLevelList = ["★★★★", "★★★★★"];
  } else {
    rarityLevelList = ["★★★★★"];
  }

  let selectedRarityStars;
  if (selectedRarity === 1) {
    selectedRarityStars = "★";
  } else if (selectedRarity === 2) {
    selectedRarityStars = "★★";
  } else if (selectedRarity === 3) {
    selectedRarityStars = "★★★";
  } else if (selectedRarity === 4) {
    selectedRarityStars = "★★★★";
  } else {
    selectedRarityStars = "★★★★★";
  }

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    handleOnChangeRarity(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-rarity-level">
        Rarity
      </InputLabel>
      <Select
        labelId="select-rarity-level"
        value={selectedRarityStars}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {rarityLevelList.map((level, index) => (
          <MenuItem key={index} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(RarityDropdown);
