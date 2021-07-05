import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import { getPokemonNameByTrainerId } from '../../utils/functions';
import styles from './styles';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import SelectPokemonModal from './Modal';

function SimpleSelect(props) {
  const { classes, trainerId, onChangeHandler } = props;
  const [isSelectPokemonModalOpen, setIsSelectPokemonModalOpen] =
    useState(false);
  const language = useSelector((state) => state.language.currentLanguage);

  const handleOpenSelectPokemonModal = (event) => {
    setIsSelectPokemonModalOpen(true);
  };

  return (
    <>
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
        {trainerId ? getPokemonNameByTrainerId(trainerId, language) : 'Pokémon'}
      </Button>

      <SelectPokemonModal
        classes={classes}
        trainerId={trainerId}
        onChangeHandler={onChangeHandler}
        isSelectPokemonModalOpen={isSelectPokemonModalOpen}
        setIsSelectPokemonModalOpen={setIsSelectPokemonModalOpen}
        usedAsFilter={false}
        isEgg={false}
      />
    </>
  );
}

export default withStyles(styles)(SimpleSelect);
