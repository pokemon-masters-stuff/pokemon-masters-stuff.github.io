import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './styles';
const mapStateToProps = state => ({
  selectedPokemon: state.pokemon.selectedPokemon,
  selectedBuildId: state.grid.selectedBuild.id,
  savedBuilds: state.grid.savedBuilds.allIds.map(
    id => state.grid.savedBuilds.byIds[id]
  )
});

function LoadBuildDropdown(props) {
  const {
    classes,
    onChangeHandler,
    savedBuilds,
    selectedBuildId,
    selectedPokemon
  } = props;

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    onChangeHandler(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
    >
      <InputLabel ref={inputLabel} id="select-build">
        Load Builds
      </InputLabel>
      <Select
        labelId="select-build"
        labelWidth={labelWidth}
        value={selectedBuildId}
        onChange={handleChange}
      >
        {Boolean(savedBuilds.length) &&
          savedBuilds.map(
            build =>
              build.pokemon === selectedPokemon && (
                <MenuItem key={build.id} value={build.id}>
                  {build.name}
                </MenuItem>
              )
          )}
      </Select>
    </FormControl>
  );
}

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(LoadBuildDropdown));
