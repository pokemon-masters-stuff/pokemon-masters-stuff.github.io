import React from 'react';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles';

const syncLevelList = ['5', '4', '3', '2', '1'];

function SyncLevelDropdown(props) {
  const { classes, syncLevel, handleChangeSyncLevel } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    handleChangeSyncLevel(event.target.value);
  };
  console.log('syncLevel', syncLevel);
  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.syncLevel}
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
