import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { useSelector } from 'react-redux';
// import SelectPokemonModal from './SelectPokemonDropdown/Modal';
import SyncLevelDropdown from './SyncLevelDropdown';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { getEggPokemonDataByTrainerId } from '../../utils/functions';
import ModalContent from '../MovesAndSkills/ModalContent';
import SelectPokemonModal from '../SelectPokemonDropdown/Modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { rolesByLanguage } from '../../utils/constants';

const EggPokemon = (props) => {
  const { classes } = props;
  const [pokemonTrainerId, setPokemonTrainerId] = useState('18000020561');
  const [syncLevel, setSyncLevel] = useState('1');
  const language = useSelector((state) => state.language.currentLanguage);

  const selectPokemon = (trainerId) => {
    setPokemonTrainerId(trainerId);
  };

  const selectSyncLevel = (syncLevel) => {
    setSyncLevel(syncLevel);
  };

  React.useEffect(() => {
    setSyncLevel('1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonTrainerId]);

  const pokemonData = getEggPokemonDataByTrainerId(pokemonTrainerId);

  const [isSelectPokemonModalOpen, setIsSelectPokemonModalOpen] =
    useState(false);

  const handleOpenSelectPokemonModal = (event) => {
    setIsSelectPokemonModalOpen(true);
  };

  return (
    <Container
      maxWidth="md"
      style={{ paddingTop: 20, marginBottom: 30, paddingBottom: 30 }}
    >
      {/* <SelectEggPokemonDropdown
        selectedPokemon={pokemonTrainerId}
        onChangePokemon={selectPokemon}
      /> */}
      <Button
        variant="outlined"
        onClick={handleOpenSelectPokemonModal}
        style={{
          textTransform: 'none',
          marginTop: 8,
          marginLeft: 7,
          height: 40,
          fontFamily: 'inherit',
          fontSize: 'inherit',
        }}
        label="Pokemon"
      >
        {pokemonTrainerId
          ? `${pokemonData['pokemonNameByLanguage'][language]} (${
              rolesByLanguage[pokemonData['role']][language]
            })`
          : 'Pokémon'}
      </Button>
      <SelectPokemonModal
        classes={classes}
        trainerId={pokemonTrainerId}
        onChangeHandler={selectPokemon}
        isSelectPokemonModalOpen={isSelectPokemonModalOpen}
        setIsSelectPokemonModalOpen={setIsSelectPokemonModalOpen}
        usedAsFilter={false}
        isEgg={true}
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
      <Paper style={{ padding: 5, margin: 10 }}>
        <ModalContent
          trainerId={pokemonTrainerId}
          selectedCellsById={{}}
          syncLevel={syncLevel}
          language={language}
          size={'large'}
          isEgg={true}
        />
      </Paper>
    </Container>
  );
};

export default withStyles(styles)(EggPokemon);
