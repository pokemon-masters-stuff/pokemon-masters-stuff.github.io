import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styles from './styles';
import { updateUrl } from '../../actions/actionCreators';

function LoadBuildDropdown(props) {
  const { classes, onChangeHandler, onDeleteHandler } = props;

  const dispatch = useDispatch();
  const selectedPokemon = useSelector(state => state.pokemon.selectedPokemon);
  const selectedBuild = useSelector(state => state.grid.selectedBuild);
  const savedBuilds = useSelector(state =>
    state.grid.savedBuilds.allIds.map(id => state.grid.savedBuilds.byIds[id])
  );

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [showClearIcon, setShowClearIcon] = React.useState(false);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    onChangeHandler(event.target.value);
    dispatch(updateUrl(selectedPokemon));
  };

  const handleOpen = () => {
    setShowClearIcon(true);
  };

  const handleClose = () => {
    setShowClearIcon(false);
  };

  const handleDelete = (buildId, event) => {
    event.stopPropagation();
    window.confirm('Are you sure you wish to delete this save?') &&
      onDeleteHandler(buildId);
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
        value={selectedBuild.id}
        onChange={handleChange}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {Boolean(savedBuilds.length) &&
          savedBuilds.map(
            build =>
              build.pokemon === selectedPokemon && (
                <MenuItem key={build.id} value={build.id}>
                  {build.name}
                  {showClearIcon ? (
                    <IconButton
                      onClick={handleDelete.bind(this, build.id)}
                      style={{ marginLeft: 'auto', padding: 0 }}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  ) : null}
                </MenuItem>
              )
          )}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(LoadBuildDropdown);
