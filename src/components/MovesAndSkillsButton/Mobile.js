import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import UI from '../../utils/translations';
import { getPokemonDataByName } from '../../utils/functions';

const MovesAndSkillsModal = () => {
  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const language = useSelector((state) => state.language.currentLanguage);

  const [
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  ] = useState(false);

  const handleOnOpenMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(true);
  };

  const handleOnCloseMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(false);
  };

  let pokemonData = getPokemonDataByName(pokemon);

  const { moves, passives, megaForm } = pokemonData;

  return (
    <Fragment>
      {/* <ListItem button onClick={handleOnOpenMovesAndSkillsModal}>
        <ListItemIcon className={props.classes.listIcon}>
          <AccessibilityNewIcon />
        </ListItemIcon>
        <ListItemText primary={UI['Moves & Skills'][language]} />
      </ListItem> */}

      <Button variant="outlined" onClick={handleOnOpenMovesAndSkillsModal}>
        {UI['Moves & Skills'][language]}
      </Button>

      <Dialog
        open={isMovesAndSkillsModalVisible}
        onClose={handleOnCloseMovesAndSkillsModal}
      >
        <DialogTitle>{UI['Moves & Skills'][language]}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            style={{
              display: 'inline-block',
              wordBreak: 'break-word',
              whiteSpace: 'pre-line',
              paddingRight: 10,
            }}
          >
            {moves.move1.name[language]}
            {passives.passive1.name[language]}
            {megaForm ? megaForm.moves.move1.name[language] : null}
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button
            target="_blank"
            href="https://docs.google.com/document/d/19HZYH4QvrnB-G52n18igDVOWtJKgvJUCxTk3v7Y6gEU/edit?usp=sharing"
            color="primary"
            autoFocus
          >
            Open link in new tab
          </Button>
        </DialogActions> */}
      </Dialog>
    </Fragment>
  );
};

export default MovesAndSkillsModal;
