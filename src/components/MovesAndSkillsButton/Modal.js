import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import UI from '../../utils/translations';
import { getPokemonDataByName } from '../../utils/functions';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Moves(props) {
  const { language, move, selectedMoves, syncLevel } = props;

  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  let powerUpFromGrid = selectedMoves[move.id]
    ? selectedMoves[move.id].power || 0
    : 0;

  let accuracyUpFromGrid = selectedMoves[move.id]
    ? selectedMoves[move.id].accuracy || 0
    : 0;

  return (
    <Fragment>
      <TableRow key={move.name[language]} className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {move.name[language]}
        </TableCell>
        <TableCell align="right">
          {move.gaugeDrain ? move.gaugeDrain : '-'}
        </TableCell>
        <TableCell align="right">{move.maxUses ? move.maxUses : '-'}</TableCell>
        <TableCell align="right">
          {move.power
            ? move.power +
              Math.floor(move.power * ((Number(syncLevel) - 1) * 0.05))
            : '-'}
        </TableCell>
        <TableCell align="right">{powerUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {move.power
            ? move.power +
              Math.floor(move.power * ((Number(syncLevel) - 1) * 0.05)) +
              powerUpFromGrid
            : '-'}
        </TableCell>
      </TableRow>

      <TableRow className={classes.root}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="details">
                <TableHead>
                  <TableRow key={move.name[language]}>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Target</TableCell>
                    <TableCell align="right">Accuracy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={move.name[language]}>
                    <TableCell align="left">
                      {move.description[language]}
                    </TableCell>
                    <TableCell align="left">
                      {move.targetType ? move.targetType[language] : '-'}
                    </TableCell>
                    <TableCell align="right">
                      {move.accuracy ? move.accuracy + accuracyUpFromGrid : '-'}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

function SyncMove(props) {
  const { language, syncMove, selectedMoves, syncLevel } = props;

  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  let powerUpFromGrid = selectedMoves.hasOwnProperty(syncMove.id)
    ? selectedMoves[syncMove.id].power
    : 0;

  return (
    <Fragment>
      <TableRow key={syncMove.name[language]} className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {syncMove.name[language]}
        </TableCell>
        <TableCell align="right">
          {syncMove.power
            ? syncMove.power +
              Math.floor(syncMove.power * ((Number(syncLevel) - 1) * 0.05))
            : '-'}
        </TableCell>
        <TableCell align="right">{powerUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {syncMove.power
            ? syncMove.power +
              Math.floor(syncMove.power * ((Number(syncLevel) - 1) * 0.05)) +
              powerUpFromGrid
            : '-'}
        </TableCell>
      </TableRow>

      <TableRow className={classes.root}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="details">
                <TableHead></TableHead>
                <TableBody>
                  <TableRow key={syncMove.name[language]}>
                    <TableCell align="center">
                      {syncMove.description[language]}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

function Passives(props) {
  const { language, passive } = props;

  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <Fragment>
      <TableRow key={passive.name[language]} className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {passive.name[language]}
        </TableCell>
      </TableRow>

      <TableRow className={classes.root}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="details">
                <TableHead></TableHead>
                <TableBody>
                  <TableRow key={passive.name[language]}>
                    <TableCell align="center">
                      {passive.description[language]}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

export default function MovesAndSkillsModal(props) {
  const {
    language,
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  } = props;

  const selectedCellsById = useSelector(
    (state) => state.grid.selectedCellsById
  );

  const syncLevel = useSelector((state) => state.grid.syncLevel);

  const selectedCellsArray = Object.values(selectedCellsById);

  let hash = {};

  selectedCellsArray.forEach((cellData) => {
    // type = 9 is attack move power up
    if (cellData.type === 9) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          power: cellData.value,
        };
      } else if (!hash[cellData.moveId]['power']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          power: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          power: (hash[cellData.moveId].power || 0) + cellData.value,
        };
      }
    }
    // type = 10 is accuracy up
    if (cellData.type === 10) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          accuracy: cellData.value,
        };
      } else if (!hash[cellData.moveId]['accuracy']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          accuracy: (hash[cellData.moveId].accuracy || 0) + cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          accuracy: (hash[cellData.moveId].accuracy || 0) + cellData.value,
        };
      }
    }

    return hash;
  });

  let selectedMoves = hash;

  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const pokemonData = getPokemonDataByName(pokemon);

  const { moves, passives, megaForm } = pokemonData;

  const [isMega, setIsMega] = useState(false);

  const handleOnCloseMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(false);
    setIsMega(false);
  };

  const handleOnClickMegaButton = (e) => {
    setIsMega(!isMega);
  };

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
            {isMega ? 'pre-Mega' : 'post-Mega'}
          </Button>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Moves</TableCell>
                <TableCell align="right">Gauge</TableCell>
                <TableCell align="right">MP</TableCell>
                <TableCell align="right">Base Power</TableCell>
                <TableCell align="right">Grid</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isMega
                ? preMegaMoves.map((move, index) => (
                    <Moves
                      key={index}
                      language={language}
                      move={move}
                      selectedMoves={selectedMoves}
                      syncLevel={syncLevel}
                    />
                  ))
                : postMegaMoves.map((move, index) => (
                    <Moves
                      key={index}
                      language={language}
                      move={move}
                      selectedMoves={selectedMoves}
                      syncLevel={syncLevel}
                    />
                  ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} style={{ marginTop: 10 }}>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Sync Move</TableCell>
                <TableCell align="right">Base Power</TableCell>
                <TableCell align="right">Grid</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <SyncMove
                language={language}
                syncMove={moves.syncMove}
                selectedMoves={selectedMoves}
                syncLevel={syncLevel}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} style={{ marginTop: 10 }}>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Passives</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isMega
                ? preMegaPassives.map((passive, index) => (
                    <Passives
                      key={index}
                      language={language}
                      passive={passive}
                    />
                  ))
                : postMegaPassives.map((passive, index) => (
                    <Passives
                      key={index}
                      language={language}
                      passive={passive}
                    />
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}
