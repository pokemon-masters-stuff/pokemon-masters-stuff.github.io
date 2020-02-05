import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';

import SelectPokemonDropdown from '../SelectPokemonDropdown';
import styles from './styles';

function SyncGridControls(props) {
  const { classes, onChangePokemonHandler, onOpenSkillListHandler } = props;

  const handleOnOpenSkillList = () =>
    typeof onOpenSkillListHandler === 'function'
      ? onOpenSkillListHandler()
      : null;
  const handleOnChangePokemonHandler = pokemon =>
    typeof onChangePokemonHandler === 'function'
      ? onChangePokemonHandler(pokemon)
      : null;

  return (
    <Grid
      container
      className={classes.pokemonControls}
      alignItems="center"
      justify="space-around"
    >
      <Grid item>
        <SelectPokemonDropdown onChangeHandler={handleOnChangePokemonHandler} />
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={handleOnOpenSkillList}
          startIcon={<ListIcon />}
        >
          Active List
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SyncGridControls);
