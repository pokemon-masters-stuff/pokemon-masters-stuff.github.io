import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles';
import { updateTeamUrl } from '../../actions/actionCreators';
import UI from '../../utils/translations';
import { loadSelectedIndividualBuild } from '../../actions/actionCreators';

function LoadBuildDropdown(props) {
  const { classes, pokemon, slot } = props;

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const selectedBuild = useSelector(
    (state) => state.grid.teamSelectedIndividualBuilds
  );
  const savedBuilds = useSelector((state) =>
    state.grid.savedBuilds.allIds.map((id) => state.grid.savedBuilds.byIds[id])
  );

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    dispatch(
      loadSelectedIndividualBuild({ buildId: event.target.value, slot: slot })
    );
    dispatch(updateTeamUrl());
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
    >
      <InputLabel ref={inputLabel} id="select-build">
        {UI['Load Builds'][language]}
      </InputLabel>
      <Select
        labelId="select-build"
        labelWidth={labelWidth}
        value={selectedBuild[slot].id}
        onChange={handleChange}
      >
        {Boolean(savedBuilds.length) &&
          savedBuilds.map(
            (build) =>
              build.pokemon.toLowerCase() === pokemon.toLowerCase() && (
                <MenuItem key={build.id} value={build.id}>
                  {build.name}
                </MenuItem>
              )
          )}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(LoadBuildDropdown);
