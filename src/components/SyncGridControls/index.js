import React from "react";
// import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ListIcon from "@material-ui/icons/List";
// import { Link } from 'react-router-dom';
import SelectPokemonDropdown from "../SelectPokemonDropdown";
import { ResetGridButtonMobile } from "../ResetGridButton";
import { SaveBuildButtonMobile } from "../SaveBuildButton";
import { ShareButtonMobile } from "../ShareButton";
import { PublishBuildButtonMobile } from "../PublishBuildButton";
import LoginOrRegisterModal from "../auth/LoginOrRegisterModal";
import LoadBuildDropdown from "../LoadBuildDropdown";
import SyncLevelDropdown from "../../components/SyncLevelDropdown";
import { MovesAndSkillsButtonMobile } from "../MovesAndSkillsButton";
import styles from "./styles";

function SyncGridControls(props) {
  const {
    classes,
    selectedPokemon,
    onChangePokemonHandler,
    onOpenSkillListHandler,
    onChangeSavedBuildHandler,
    onDeleteSavedBuildHandler,
    onSaveBuildClickHandler,
    onShareClickHandler,
    language,
    UI,
  } = props;

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleOnOpenSkillList = () =>
    typeof onOpenSkillListHandler === "function"
      ? onOpenSkillListHandler()
      : null;

  const handleOnChangePokemonHandler = (pokemon) =>
    typeof onChangePokemonHandler === "function"
      ? onChangePokemonHandler(pokemon)
      : null;

  const handleOnChangeSavedBuild = (value) =>
    typeof onChangeSavedBuildHandler === "function"
      ? onChangeSavedBuildHandler(value)
      : null;

  const handleOnDeleteSavedBuild = (value) =>
    typeof onDeleteSavedBuildHandler === "function"
      ? onDeleteSavedBuildHandler(value)
      : null;

  const handleOnSaveBuildClick = () =>
    typeof onSaveBuildClickHandler === "function"
      ? onSaveBuildClickHandler()
      : null;

  const handleOnShareClick = () =>
    typeof onShareClickHandler === "function" ? onShareClickHandler() : null;

  return (
    <Grid
      container
      className={classes.pokemonControls}
      alignItems="flex-start"
      justify="space-evenly"
      style={{ marginTop: 0 }}
    >
      <LoginOrRegisterModal />
      <Grid item>
        <SelectPokemonDropdown
          selectedPokemon={selectedPokemon}
          onChangeHandler={handleOnChangePokemonHandler}
        />
        <SyncLevelDropdown />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={handleOnOpenSkillList}
          startIcon={<ListIcon />}
          style={{ marginTop: 10 }}
        >
          {UI["Selected"][language]}
        </Button>
      </Grid>
      <Grid item>
        <div style={{ marginTop: 10, paddingBottom: 10 }}>
          <ShareButtonMobile
            onClickHandler={handleOnShareClick}
            language={language}
            UI={UI}
          />
        </div>
      </Grid>
      <Grid item>
        <div style={{ marginTop: 10, paddingBottom: 10 }}>
          <SaveBuildButtonMobile
            onClickHandler={handleOnSaveBuildClick}
            language={language}
            UI={UI}
          />
        </div>
      </Grid>
      <Grid item>
        <div>
          <LoadBuildDropdown
            onDeleteHandler={handleOnDeleteSavedBuild}
            onChangeHandler={handleOnChangeSavedBuild}
          />
        </div>
      </Grid>
      <Grid item>
        <div style={{ marginTop: 10, paddingBottom: 10 }}>
          <PublishBuildButtonMobile />
        </div>
      </Grid>
      <Grid item>
        <div>
          <MovesAndSkillsButtonMobile />
        </div>
      </Grid>
      <Grid item>
        <div style={{ marginTop: 10 }}>
          <ResetGridButtonMobile />
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SyncGridControls);
