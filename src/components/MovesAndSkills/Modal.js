import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import SyncIcon from '@material-ui/icons/Sync';
// import UI from '../../utils/translations';
import {
  getPokemonDataByTrainerId,
  getEggPokemonDataByTrainerId,
} from '../../utils/functions';
import { icons } from '../../images/Icons/exportImagesAsObject';
import { rolesByLanguage } from '../../utils/constants';
import ModalContent from './ModalContent';

export default function MovesAndSkillsModal(props) {
  const {
    trainerId,
    // pokemon,
    language,
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
    size,
    isEgg,
  } = props;

  let pokemonData = isEgg
    ? getEggPokemonDataByTrainerId(trainerId)
    : getPokemonDataByTrainerId(trainerId);

  const {
    role,
    variationForm,
    pokemonNameByLanguage,
    trainerNameByLanguage,
    monsterFormByLanguage,
  } = pokemonData;

  const [isVariationForm, setIsVariationForm] = useState(false);

  const handleOnCloseMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(false);
    setIsVariationForm(false);
  };

  const handleOnClickVariationButton = (e) => {
    setIsVariationForm(!isVariationForm);
  };

  return (
    <Dialog
      open={isMovesAndSkillsModalVisible}
      onClose={handleOnCloseMovesAndSkillsModal}
      fullWidth={true}
      maxWidth="md"
      scroll={size === 'large' ? 'body' : 'paper'}
      style={{ zIndex: 2000 }}
    >
      <DialogTitle>
        <img
          // width="50"
          height="20"
          // src={icons[role['en'].split(' ').join('')]}
          src={icons[rolesByLanguage[role]['en'].split(' ').join('')]}
        />
        &nbsp;
        {variationForm
          ? isVariationForm
            ? `${trainerNameByLanguage[language]} & ${
                pokemonNameByLanguage[language]
              } (${variationForm.monsterFormByLanguage[language] || 'Mega'})`
            : `${trainerNameByLanguage[language]} & ${
                pokemonNameByLanguage[language]
              } (${monsterFormByLanguage[language] || 'Pre-Mega'})`
          : `${trainerNameByLanguage[language]} & ${pokemonNameByLanguage[language]}`}
        {variationForm ? (
          <Button
            style={{ float: 'right' }}
            variant="outlined"
            onClick={handleOnClickVariationButton}
          >
            <SyncIcon />
          </Button>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>
        {<ModalContent {...props} isVariationForm={isVariationForm} />}
      </DialogContent>
    </Dialog>
  );
}
