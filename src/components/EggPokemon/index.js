import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from './DataTable';
import SelectEggPokemonDropdown from './SelectEggPokemonDropdown';
import SyncLevelDropdown from './SyncLevelDropdown';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  removeHyphens,
  getEggPokemonDataByNameAndRole,
} from '../../utils/functions';

const regExp = /\(([^)]+)\)/;

const EggPokemon = () => {
  const [pokemon, setPokemon] = useState('Ninetales (Tech)');
  const [syncLevel, setSyncLevel] = useState('1');
  const language = useSelector((state) => state.language.currentLanguage);

  const selectPokemon = (pokemon) => {
    setPokemon(pokemon);
  };

  const selectSyncLevel = (syncLevel) => {
    setSyncLevel(syncLevel);
  };

  let pokemonName = pokemon.slice(0, pokemon.indexOf(' '));
  let pokemonRole = regExp.exec(pokemon)[1];

  React.useEffect(() => {
    setSyncLevel('1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const roles = { 'P.Strike': 0, 'S.Strike': 1, Support: 2, Tech: 3 };
  const pokemonData = getEggPokemonDataByNameAndRole(
    pokemonName,
    roles[pokemonRole]
  );

  return (
    <Container maxWidth="sm" style={{ paddingTop: 20, marginBottom: 30 }}>
      <SelectEggPokemonDropdown
        selectedPokemon={pokemon}
        onChangePokemon={selectPokemon}
      />
      <SyncLevelDropdown
        syncLevel={syncLevel}
        onChangeSyncLevel={selectSyncLevel}
      />
      <Grid container justify="center">
        <img
          alt=""
          src={`https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/256px/${pokemonData.monsterActorId}_256.ktx.png`}
        />
      </Grid>
      <DataTable
        language={language}
        pokemonData={pokemonData}
        pokemonName={pokemonName}
        pokemonRole={pokemonRole}
        syncLevel={syncLevel}
      />
    </Container>
  );
};

export default EggPokemon;
