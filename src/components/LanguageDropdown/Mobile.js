import React from 'react';
import { withStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles';
import { setLanguage } from '../../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';

const LanguageDropdown = props => {
  const { classes } = props;
  const language = useSelector(state => state.language.currentLanguage);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <Select labelId="set-language" value={language} onChange={handleChange}>
        <MenuItem key="de" value="de">
          de
        </MenuItem>
        <MenuItem key="en" value="en">
          en
        </MenuItem>
        <MenuItem key="es" value="es">
          es
        </MenuItem>
        <MenuItem key="fr" value="fr">
          fr
        </MenuItem>
        <MenuItem key="it" value="it">
          it
        </MenuItem>
        <MenuItem key="ja" value="ja">
          ja
        </MenuItem>
        <MenuItem key="ko" value="ko">
          ko
        </MenuItem>
        <MenuItem key="zh" value="zh">
          zh
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default withStyles(styles)(LanguageDropdown);
