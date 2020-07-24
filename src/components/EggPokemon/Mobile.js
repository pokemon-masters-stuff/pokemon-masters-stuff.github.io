import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "./DataTable";
import SelectEggPokemonDropdown from "./SelectEggPokemonDropdown";
import SyncLevelDropdown from "./SyncLevelDropdown";
import Container from "@material-ui/core/Container";
import Nav from "../MainAppbar/Nav";
import { NavigationMobile } from "../Navigation";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { allPictures } from "../../utils/constants";
import LoginOrRegisterModal from "../auth/LoginOrRegisterModal";

const regExp = /\(([^)]+)\)/;

const EggPokemon = () => {
  const [pokemon, setPokemon] = useState("Scyther (P.Strike)");
  const [syncLevel, setSyncLevel] = useState("1");
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const handleOnCloseNav = () => setIsNavOpened(false);

  const handleOnOpenNav = () => setIsNavOpened(true);

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
    <div className={`App ${darkMode ? "dark-mode" : null}`}>
      <div className="content">
        <div className="container container-s">
          <AppBar position="fixed">
            <Nav onOpenNavHandler={handleOnOpenNav} />
            <NavigationMobile
              isOpened={isNavOpened}
              onCloseHandler={handleOnCloseNav}
            />{" "}
          </AppBar>

          <LoginOrRegisterModal />

          <Container maxWidth="sm" style={{ paddingTop: 80, marginBottom: 30 }}>
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
                src={allPictures[`${pokemonName.toLowerCase()}Pic`]}
              />
            </Grid>
            <DataTable
              language={language}
              pokemonName={pokemonName}
              pokemonRole={pokemonRole}
              syncLevel={syncLevel}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default EggPokemon;
