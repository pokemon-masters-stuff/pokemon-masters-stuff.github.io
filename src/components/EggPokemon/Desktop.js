import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "./DataTable";
import SelectEggPokemonDropdown from "./SelectEggPokemonDropdown";
import SyncLevelDropdown from "./SyncLevelDropdown";
import Container from "@material-ui/core/Container";

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
