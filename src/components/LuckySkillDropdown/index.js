import React from 'react';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import UI from '../../utils/translations';
import LUCKY_SKILLS_LIST from '../../data/luckySkills.json';
import styles from './styles';
import { useSelector } from 'react-redux';

function SimpleSelect(props) {
  const { classes, luckySkillId, setLuckySkillId } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const language = useSelector((state) => state.language.currentLanguage);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    if (event.target.value) {
      setLuckySkillId(event.target.value);
    }
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-lucky-skill">
        {UI['Lucky Skill'][language]}
      </InputLabel>
      <Select
        labelId="select-lucky-skill"
        value={luckySkillId}
        onChange={handleChange}
        labelWidth={labelWidth}
        MenuProps={{
          disablePortal: true,
          classes: { paper: classes.menuPaper },
        }}
        style={{ marginLeft: -8 }}
      >
        {Object.entries(LUCKY_SKILLS_LIST).map(([key, value]) => (
          <MenuItem key={key} value={key}>
            {value[language]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SimpleSelect);
