import React from 'react';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles';

function SimpleSelect(props) {
  const { classes, syncLv, setSyncLv } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    if (event.target.value) {
      setSyncLv(event.target.value);
    }
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="syncLv">
        Sync
      </InputLabel>
      <Select
        labelId="select-lucky-skill"
        value={syncLv}
        onChange={handleChange}
        labelWidth={labelWidth}
        MenuProps={{
          disablePortal: true,
          classes: { paper: classes.menuPaper },
        }}
        style={{ marginLeft: -8 }}
      >
        <MenuItem key={3} value={'3'}>
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
  );
}

export default withStyles(styles)(SimpleSelect);
