import React from 'react';
import { withStyles } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  getPokemonNameList,
  getNewPokemonNameList,
  getPokemonDataByTrainerId,
} from '../../utils/functions';
import styles from './styles';
import { updateUrl, setSyncLevel } from '../../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import { pokemonPictures } from '../../images/Pokemon/exportImagesAsObject';

function SimpleSelect(props) {
  const dispatch = useDispatch();
  const { classes, trainerId, onChangeHandler } = props;
  // const [pokemon, setPokemon] = React.useState(selectedPokemon);
  const [syncPair, setSyncPair] = React.useState(trainerId);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const language = useSelector((state) => state.language.currentLanguage);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // setPokemon(selectedPokemon);
    setSyncPair(trainerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainerId]);

  const handleChange = (event) => {
    if (event.target.value) {
      // setPokemon(event.target.value);
      setSyncPair(event.target.value);
      onChangeHandler(event.target.value);

      dispatch(updateUrl(event.target.value));
      dispatch(setSyncLevel('5'));
    }
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
        value={syncPair}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        <ListSubheader disableSticky={true}>New</ListSubheader>
        {getNewPokemonNameList(language).map((syncPairData, index) => (
          <MenuItem key={index} value={syncPairData.trainerId}>
            {syncPair !== syncPairData.trainerId ? (
              <>
                <img
                  width="40"
                  height="40"
                  src={
                    pokemonPictures[
                      getPokemonDataByTrainerId(syncPairData.trainerId)
                        .monsterActorId + '_128'
                    ]
                  }
                />
                &nbsp;
              </>
            ) : null}
            {syncPairData.value}
          </MenuItem>
        ))}
        <ListSubheader disableSticky={true}>All</ListSubheader>
        {getPokemonNameList(language).map((syncPairData, index) => (
          <MenuItem key={index} value={syncPairData.trainerId}>
            {syncPair !== syncPairData.trainerId ? (
              <>
                <img
                  width="40"
                  height="40"
                  src={
                    pokemonPictures[
                      getPokemonDataByTrainerId(syncPairData.trainerId)
                        .monsterActorId + '_128'
                    ]
                  }
                />
                &nbsp;
              </>
            ) : null}
            {syncPairData.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default withStyles(styles)(SimpleSelect);
