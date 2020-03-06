import React from 'react';
import { withStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { pokemonNameList } from '../../data';
import styles from './styles';
import { updateUrl } from '../../actions/actionCreators';
import { useDispatch } from 'react-redux';

function SimpleSelect(props) {
  const dispatch = useDispatch();
  const { classes, selectedPokemon, onChangeHandler } = props;
  const [pokemon, setPokemon] = React.useState(selectedPokemon);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    setPokemon(selectedPokemon);
  }, [selectedPokemon]);

  const handleChange = event => {
    setPokemon(event.target.value);
    onChangeHandler(event.target.value);

    dispatch(updateUrl(event.target.value));
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-pokemon">
        Pokemon
      </InputLabel>
      <Select
        labelId="select-pokemon"
        value={pokemon}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {pokemonNameList.map((pokemon, index) => (
          <MenuItem key={index} value={pokemon.name}>
            {pokemon.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SimpleSelect);
