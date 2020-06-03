import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UI from '../../utils/translations';
import { getPokemonDataByName } from '../../utils/functions';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

const MovesAndSkillsModal = () => {
  const classes = useStyles();
  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const language = useSelector((state) => state.language.currentLanguage);

  const [
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  ] = useState(false);

  const [isMega, setIsMega] = useState(false);

  const handleOnOpenMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(true);
  };

  const handleOnCloseMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(false);
  };

  const handleOnClickMegaButton = (e) => {
    setIsMega(!isMega);
  };

  let pokemonData = getPokemonDataByName(pokemon);

  const { moves, passives, megaForm } = pokemonData;

  const preMegaMoves = [moves.move1, moves.move2, moves.move3, moves.move4];
  let preMegaPassives;
  let postMegaMoves;
  let postMegaPassives;
  if (passives.passive3) {
    preMegaPassives = [passives.passive1, passives.passive2, passives.passive3];
  } else if (passives.passive2) {
    preMegaPassives = [passives.passive1, passives.passive2];
  } else {
    preMegaPassives = [passives.passive1];
  }

  if (megaForm) {
    postMegaMoves = megaForm.moves
      ? [
          megaForm.moves.move1 ? megaForm.moves.move1 : moves.move1,
          megaForm.moves.move2 ? megaForm.moves.move2 : moves.move2,
          megaForm.moves.move3 ? megaForm.moves.move3 : moves.move3,
          megaForm.moves.move4 ? megaForm.moves.move4 : moves.move4,
        ]
      : preMegaMoves;

    if (megaForm.passives) {
      if (megaForm.passives.passive3) {
        postMegaPassives = [
          megaForm.passives.passive1,
          megaForm.passives.passive2,
          megaForm.passives.passive3,
        ];
      } else if (megaForm.passives.passive2) {
        postMegaPassives = [
          megaForm.passives.passive1,
          megaForm.passives.passive2,
        ];
      } else {
        postMegaPassives = [megaForm.passives.passive1];
      }
    } else {
      postMegaPassives = preMegaPassives;
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-info"
        onClick={handleOnOpenMovesAndSkillsModal}
        style={{ position: 'relative', zIndex: 999 }}
      >
        {UI['Moves & Skills'][language]}
      </button>

      <Dialog
        open={isMovesAndSkillsModalVisible}
        onClose={handleOnCloseMovesAndSkillsModal}
      >
        <DialogTitle>
          {UI['Moves & Skills'][language]}
          {megaForm ? (
            <Button
              style={{ float: 'right' }}
              variant="outlined"
              onClick={handleOnClickMegaButton}
            >
              {isMega ? 'post-Mega' : 'pre-Mega'}
            </Button>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Moves</TableCell>
                  <TableCell align="right">BP</TableCell>
                  <TableCell align="right">Grid</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Acc</TableCell>
                  <TableCell align="right">MP</TableCell>
                  <TableCell align="left">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isMega
                  ? preMegaMoves.map((move) => (
                      <TableRow key={move.name[language]}>
                        <TableCell component="th" scope="row">
                          {move.name[language]}
                        </TableCell>
                        <TableCell align="right">
                          {move.power ? move.power : '-'}
                        </TableCell>
                        <TableCell align="right">from grid</TableCell>
                        <TableCell align="right">Sum</TableCell>
                        <TableCell align="right">
                          {move.accuracy ? move.accuracy : '-'}
                        </TableCell>
                        <TableCell align="right">
                          {move.maxUses ? move.maxUses : '-'}
                        </TableCell>
                        <TableCell align="left">
                          {move.description[language]}
                        </TableCell>
                      </TableRow>
                    ))
                  : postMegaMoves.map((move) => (
                      <TableRow key={move.name[language]}>
                        <TableCell component="th" scope="row">
                          {move.name[language]}
                        </TableCell>
                        <TableCell align="right">
                          {move.power ? move.power : '-'}
                        </TableCell>
                        <TableCell align="right">from grid</TableCell>
                        <TableCell align="right">Sum</TableCell>
                        <TableCell align="right">
                          {move.accuracy ? move.accuracy : '-'}
                        </TableCell>
                        <TableCell align="right">
                          {move.maxUses ? move.maxUses : '-'}
                        </TableCell>
                        <TableCell align="left">
                          {move.description[language]}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} style={{ marginTop: 10 }}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Passives</TableCell>
                  <TableCell align="left">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!isMega
                  ? preMegaPassives.map((passive) => (
                      <TableRow key={passive.name[language]}>
                        <TableCell component="th" scope="row">
                          {passive.name[language]}
                        </TableCell>
                        <TableCell align="left">
                          {passive.description[language]}
                        </TableCell>
                      </TableRow>
                    ))
                  : postMegaPassives.map((passive) => (
                      <TableRow key={passive.name[language]}>
                        <TableCell component="th" scope="row">
                          {passive.name[language]}
                        </TableCell>
                        <TableCell align="left">
                          {passive.description[language]}
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* </DialogContentText> */}
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default MovesAndSkillsModal;
