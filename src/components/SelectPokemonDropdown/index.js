import React from "react";
import { withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getPokemonNameList } from "../../utils/functions";
import styles from "./styles";
import { updateUrl, setSyncLevel } from "../../actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";

function SimpleSelect(props) {
  const dispatch = useDispatch();
  const { classes, selectedPokemon, onChangeHandler } = props;
  const [pokemon, setPokemon] = React.useState(selectedPokemon);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const language = useSelector((state) => state.language.currentLanguage);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setPokemon(selectedPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon]);

  const handleChange = (event) => {
    setPokemon(event.target.value);
    onChangeHandler(event.target.value);

    dispatch(updateUrl(event.target.value));
    dispatch(setSyncLevel("5"));
  };

  return (
    <FormControl
      variant="outlined"
      size="small"
      className={classes.formControl}
      color="primary"
    >
      <InputLabel ref={inputLabel} id="select-pokemon">
        Pokémon
      </InputLabel>
      <Select
        labelId="select-pokemon"
        value={pokemon}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {getPokemonNameList(language).map((pokemon, index) => (
          <MenuItem key={index} value={pokemon.name}>
            {pokemon.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SimpleSelect);
