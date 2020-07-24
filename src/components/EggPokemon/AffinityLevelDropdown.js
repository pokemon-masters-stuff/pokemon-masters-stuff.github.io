import React from "react";
import { withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./styles";

const affinityLevelList = ["1/3", "2/3", "3/3"];

function AffinityLevelDropdown(props) {
  const { classes, selectedAffinityLevel, handleOnChangeAffinityLevel } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    handleOnChangeAffinityLevel(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-affinity-level">
        Affinity Lv
      </InputLabel>
      <Select
        labelId="select-affinity-level"
        value={selectedAffinityLevel}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {affinityLevelList.map((level, index) => (
          <MenuItem key={index} value={level}>
            {level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(AffinityLevelDropdown);
