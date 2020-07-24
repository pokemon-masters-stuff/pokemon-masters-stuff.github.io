import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "./DataTable";
import SelectEggPokemonDropdown from "./SelectEggPokemonDropdown";
import SyncLevelDropdown from "./SyncLevelDropdown";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { allPictures } from "../../utils/constants";

const regExp = /\(([^)]+)\)/;

const EggPokemon = () => {
  const [pokemon, setPokemon] = useState("Scyther (P.Strike)");
  const [syncLevel, setSyncLevel] = useState("1");
  const language = useSelector((state) => state.language.currentLanguage);

  const selectPokemon = (pokemon) => {
    setPokemon(pokemon);
  };

  const selectSyncLevel = (syncLevel) => {
    setSyncLevel(syncLevel);
  };

  let pokemonName = pokemon.slice(0, pokemon.indexOf(" "));
  let pokemonRole = regExp.exec(pokemon)[1];

  React.useEffect(() => {
    setSyncLevel("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

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
        <img alt="" src={allPictures[`${pokemonName.toLowerCase()}Pic`]} />
      </Grid>
      <DataTable
        language={language}
        pokemonName={pokemonName}
        pokemonRole={pokemonRole}
        syncLevel={syncLevel}
      />
    </Container>
  );
};

export default EggPokemon;
