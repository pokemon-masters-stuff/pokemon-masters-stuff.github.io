import React from 'react';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';

const syncLevelList = [1, 2, 3, 4, 5];

function SyncLevelSelect(props) {
  const dispatch = useDispatch();
  const { classes, onChangeHandler } = props;
  const [syncLevel, setSyncLevel] = React.useState(3);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const language = useSelector((state) => state.language.currentLanguage);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    setSyncLevel(3);
  }, []);

  const handleChange = (event) => {
    setSyncLevel(event.target.value);
    onChangeHandler(event.target.value);
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
        value={pokemon}
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

export default withStyles(styles)(SyncLevelSelect);
