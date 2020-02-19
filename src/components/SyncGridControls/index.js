import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';

import SelectPokemonDropdown from '../SelectPokemonDropdown';
import { ResetGridButtonMobile } from '../ResetGridButton';
import SaveBuildButton from '../SaveBuildButton';
import LoadBuildDropdown from '../LoadBuildDropdown';
import styles from './styles';

function SyncGridControls(props) {
  const {
    classes,
    selectedPokemon,
    onChangePokemonHandler,
    onOpenSkillListHandler,
    onChangeSavedBuildHandler,
    onSaveBuildClickHandler
  } = props;

  const handleOnOpenSkillList = () =>
    typeof onOpenSkillListHandler === 'function'
      ? onOpenSkillListHandler()
      : null;

  const handleOnChangePokemonHandler = pokemon =>
    typeof onChangePokemonHandler === 'function'
      ? onChangePokemonHandler(pokemon)
      : null;

  const handleOnChangeSavedBuild = value =>
    typeof onChangeSavedBuildHandler === 'function'
      ? onChangeSavedBuildHandler(value)
      : null;

  const handleOnSaveBuildClick = () =>
    typeof onSaveBuildClickHandler === 'function'
      ? onSaveBuildClickHandler()
      : null;

  return (
    <Grid
      container
      className={classes.pokemonControls}
      alignItems="flex-start"
      justify="space-evenly"
      style={{ marginTop: 0 }}
    >
      <Grid item>
        <SelectPokemonDropdown
          selectedPokemon={selectedPokemon}
          onChangeHandler={handleOnChangePokemonHandler}
        />
      </Grid>

      <Grid item>
        <div style={{ marginTop: 10 }}>
          <ResetGridButtonMobile />
          <SaveBuildButton onClickHandler={handleOnSaveBuildClick} />
          <LoadBuildDropdown onChangeHandler={handleOnChangeSavedBuild} />
        </div>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={handleOnOpenSkillList}
          startIcon={<ListIcon />}
          style={{ marginTop: 10 }}
        >
          Selected
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SyncGridControls);
