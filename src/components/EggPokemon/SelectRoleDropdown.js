import React from "react";
import { withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./styles";

const roles = ["Strike", "Support", "Tech"];

function SelectRoleDropdown(props) {
  const { classes, selectedRole, handleOnChangeRole } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    handleOnChangeRole(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-role">
        Role
      </InputLabel>
      <Select
        labelId="select-role"
        value={selectedRole}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {roles.map((level, index) => (
          <MenuItem key={index} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SelectRoleDropdown);
