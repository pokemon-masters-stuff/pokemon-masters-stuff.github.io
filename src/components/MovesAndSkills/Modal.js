import React, { Fragment, useState } from 'react';
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
import SyncIcon from '@material-ui/icons/Sync';
// import UI from '../../utils/translations';
import RarityDropdown from './RarityDropdown';
import PotentialDropdown from './PotentialDropdown';
import { getPokemonDataByTrainerId } from '../../utils/functions';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// TO-DO: Refactor
function Stats(props) {
  const {
    statsPlusPotential,
    selectedStatTiles,
    rarity,
    selectedRarity,
    variationForm,
    isVariationForm,
    // pokemon,
    trainerId,
  } = props;

  const {
    hp,
    atk,
    def,
    spa,
    spd,
    spe,
    atkScale,
    defScale,
    spaScale,
    spdScale,
    speScale,
  } = statsPlusPotential;

  const classes = useRowStyles();

  let hpUpFromGrid = 0;
  let atkUpFromGrid = 0;
  let defUpFromGrid = 0;
  let spaUpFromGrid = 0;
  let spdUpFromGrid = 0;
  let speUpFromGrid = 0;
  let atkUpFromVariation,
    defUpFromVariation,
    spaUpFromVariation,
    spdUpFromVariation,
    speUpFromVariation;

  if (selectedStatTiles) {
    hpUpFromGrid = selectedStatTiles.hp ? selectedStatTiles.hp : hpUpFromGrid;
    atkUpFromGrid = selectedStatTiles.atk
      ? selectedStatTiles.atk
      : atkUpFromGrid;
    defUpFromGrid = selectedStatTiles.def
      ? selectedStatTiles.def
      : defUpFromGrid;
    spaUpFromGrid = selectedStatTiles.spa
      ? selectedStatTiles.spa
      : spaUpFromGrid;
    spdUpFromGrid = selectedStatTiles.spd
      ? selectedStatTiles.spd
      : spdUpFromGrid;
    speUpFromGrid = selectedStatTiles.spe
      ? selectedStatTiles.spe
      : speUpFromGrid;
  }

  let lv135Hp = hp[3] + ((hp[4] - hp[3]) / (120 - 100)) * 35;
  let lv135Atk = atk[3] + ((atk[4] - atk[3]) / (120 - 100)) * 35;
  let lv135Def = def[3] + ((def[4] - def[3]) / (120 - 100)) * 35;
  let lv135Spa = spa[3] + ((spa[4] - spa[3]) / (120 - 100)) * 35;
  let lv135Spd = spd[3] + ((spd[4] - spd[3]) / (120 - 100)) * 35;
  let lv135Spe = spe[3] + ((spe[4] - spe[3]) / (120 - 100)) * 35;

  // if (trainerId === '10137000000') {
  //   lv135Hp = 354;
  //   lv135Atk = 254;
  //   lv135Def = 254;
  //   lv135Spa = 254;
  //   lv135Spd = 254;
  //   lv135Spe = 254;
  // }

  // let baseHp = hp[4] + (selectedRarity - rarity) * 40;
  let baseHp = Math.floor(lv135Hp + (selectedRarity - rarity) * 40);
  let baseAtk = Math.floor(lv135Atk + (selectedRarity - rarity) * 20);
  let baseDef = Math.floor(lv135Def + (selectedRarity - rarity) * 20);
  let baseSpa = Math.floor(lv135Spa + (selectedRarity - rarity) * 20);
  let baseSpd = Math.floor(lv135Spd + (selectedRarity - rarity) * 20);
  let baseSpe = Math.floor(lv135Spe + (selectedRarity - rarity) * 20);

  if (isVariationForm) {
    atkUpFromVariation = Math.floor(baseAtk * (atkScale / 100 - 1));
    defUpFromVariation = Math.floor(baseDef * (defScale / 100 - 1));
    spaUpFromVariation = Math.floor(baseSpa * (spaScale / 100 - 1));
    spdUpFromVariation = Math.floor(baseSpd * (spdScale / 100 - 1));
    speUpFromVariation = Math.floor(baseSpe * (speScale / 100 - 1));
  }

  return (
    <Fragment>
      <TableRow key="hp" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          HP
        </TableCell>
        <TableCell align="right">{baseHp}</TableCell>
        {isVariationForm && variationForm.isMega ? (
          <TableCell align="right">{'-'}</TableCell>
        ) : null}
        <TableCell align="right">{hpUpFromGrid || '-'}</TableCell>
        <TableCell align="right">{baseHp + hpUpFromGrid}</TableCell>
      </TableRow>
      <TableRow key="atk" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Attack
        </TableCell>
        <TableCell align="right">{baseAtk}</TableCell>
        {isVariationForm && variationForm.isMega ? (
          <TableCell align="right">{atkUpFromVariation || '-'}</TableCell>
        ) : null}
        <TableCell align="right">{atkUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {isVariationForm && variationForm.isMega
            ? baseAtk + atkUpFromGrid + atkUpFromVariation
            : baseAtk + atkUpFromGrid}
        </TableCell>
      </TableRow>
      <TableRow key="def" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Defense
        </TableCell>
        <TableCell align="right">{baseDef}</TableCell>
        {isVariationForm && variationForm.isMega ? (
          <TableCell align="right">{defUpFromVariation || '-'}</TableCell>
        ) : null}
        <TableCell align="right">{defUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {isVariationForm
            ? baseDef + defUpFromGrid + defUpFromVariation
            : baseDef + defUpFromGrid}
        </TableCell>
      </TableRow>
      <TableRow key="spa" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Sp.Atk
        </TableCell>
        <TableCell align="right">{baseSpa}</TableCell>
        {isVariationForm && variationForm.isMega ? (
          <TableCell align="right">{spaUpFromVariation || '-'}</TableCell>
        ) : null}
        <TableCell align="right">{spaUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {isVariationForm && variationForm.isMega
            ? baseSpa + spaUpFromGrid + spaUpFromVariation
            : baseSpa + spaUpFromGrid}
        </TableCell>
      </TableRow>
      <TableRow key="spd" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Sp.Def
        </TableCell>
        <TableCell align="right">{baseSpd}</TableCell>
        {isVariationForm && variationForm.isMega ? (
          <TableCell align="right">{spdUpFromVariation || '-'}</TableCell>
        ) : null}
        <TableCell align="right">{spdUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {isVariationForm && variationForm.isMega
            ? baseSpd + spdUpFromGrid + spdUpFromVariation
            : baseSpd + spdUpFromGrid}
        </TableCell>
      </TableRow>
      <TableRow key="spe" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Speed
        </TableCell>
        <TableCell align="right">{baseSpe}</TableCell>
        {isVariationForm && variationForm.isMega ? (
          <TableCell align="right">{speUpFromVariation || '-'}</TableCell>
        ) : null}
        <TableCell align="right">{speUpFromGrid || '-'}</TableCell>
        <TableCell align="right">
          {isVariationForm && variationForm.isMega
            ? baseSpe + speUpFromGrid + speUpFromVariation
            : baseSpe + speUpFromGrid}
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

function Moves(props) {
  const { language, move, selectedMoves, syncLevel } = props;
  // console.log('syncLevel', syncLevel);
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  let powerUpFromGrid = selectedMoves[move.id]
    ? selectedMoves[move.id].power || 0
    : 0;

  let accuracyUpFromGrid = selectedMoves[move.id]
    ? selectedMoves[move.id].accuracy || 0
    : 0;

  let moveCategory = '-';

  if (move.category === 1) {
    moveCategory = 'Physical';
  } else if (move.category === 2) {
    moveCategory = 'Special';
  } else if (move.category === 3) {
    moveCategory = 'Status';
  }

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
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="right">Category</TableCell>
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
                      {move.typeName ? move.typeName[language] : '-'}
                    </TableCell>
                    <TableCell align="left">
                      {move.category ? moveCategory : '-'}
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

  let syncMoveCategory = '-';

  if (syncMove.category === 1) {
    syncMoveCategory = 'Physical';
  } else if (syncMove.category === 2) {
    syncMoveCategory = 'Special';
  } else if (syncMove.category === 3) {
    syncMoveCategory = 'Status';
  }

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
        <TableCell align="left">
          {syncMove.typeName ? syncMove.typeName[language] : '-'}
        </TableCell>
        <TableCell align="left">
          {syncMove.category ? syncMoveCategory : '-'}
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
                    <TableCell
                      align="center"
                      style={{
                        whiteSpace: 'pre-line',
                      }}
                    >
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
    trainerId,
    // pokemon,
    selectedCellsById,
    syncLevel,
    language,
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  } = props;

  // console.log('selectedCellsById', selectedCellsById);

  // const selectedCellsById = grid.selectedCellsById;

  // const syncLevel = useSelector((state) => state.grid.syncLevel);

  const selectedCellsArray = Object.values(selectedCellsById);

  // console.log('selectedCellsArray', selectedCellsArray);

  let hash = {};

  selectedCellsArray.forEach((cellData) => {
    // type = 1 is hp up
    if (cellData.type === 1) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          hp: cellData.value,
        };
      } else if (!hash[cellData.moveId]['hp']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          hp: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          hp: (hash[cellData.moveId].hp || 0) + cellData.value,
        };
      }
    }

    // type = 2 is atk up
    if (cellData.type === 2) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          atk: cellData.value,
        };
      } else if (!hash[cellData.moveId]['atk']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          atk: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          atk: (hash[cellData.moveId].atk || 0) + cellData.value,
        };
      }
    }

    // type = 3 is def up
    if (cellData.type === 3) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          def: cellData.value,
        };
      } else if (!hash[cellData.moveId]['def']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          def: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          def: (hash[cellData.moveId].def || 0) + cellData.value,
        };
      }
    }

    // type = 4 is spa up
    if (cellData.type === 4) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spa: cellData.value,
        };
      } else if (!hash[cellData.moveId]['spa']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spa: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spa: (hash[cellData.moveId].spa || 0) + cellData.value,
        };
      }
    }

    // type = 5 is spd up
    if (cellData.type === 5) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spd: cellData.value,
        };
      } else if (!hash[cellData.moveId]['spd']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spd: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spd: (hash[cellData.moveId].spd || 0) + cellData.value,
        };
      }
    }

    // type = 6 is spe up
    if (cellData.type === 6) {
      if (!hash[cellData.moveId]) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spe: cellData.value,
        };
      } else if (!hash[cellData.moveId]['spe']) {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spe: cellData.value,
        };
      } else {
        hash[cellData.moveId] = {
          ...hash[cellData.moveId],
          spe: (hash[cellData.moveId].spe || 0) + cellData.value,
        };
      }
    }

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

  const pokemonData = getPokemonDataByTrainerId(trainerId);

  const {
    stats,
    moves,
    passives,
    variationForm,
    rarity,
    pokemonNameByLanguage,
    trainerNameByLanguage,
    roleTypeNameByLanguage,
    monsterFormByLanguage,
  } = pokemonData;

  const [isVariationForm, setIsVariationForm] = useState(false);

  const [selectedRarity, setSelectedRarity] = useState(rarity);

  const [selectedPotential, setSelectedPotential] = useState(0);

  let bonusHpFromPotential =
    rarity === 5 ? selectedPotential * 5 || 0 : selectedPotential * 2 || 0;

  let bonusStatFromPotentialExceptHp =
    rarity === 5 ? selectedPotential * 2 || 0 : selectedPotential || 0;

  React.useEffect(() => {
    setSelectedRarity(rarity);
    setSelectedPotential(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainerId]);

  const handleOnChangeRarity = (value) => {
    let selectedValue;
    if (value === '★★★') {
      selectedValue = 3;
    } else if (value === '★★★★') {
      selectedValue = 4;
    } else {
      selectedValue = 5;
    }
    setSelectedRarity(selectedValue);
  };

  const handleOnChangePotential = (value) => {
    setSelectedPotential(value);
  };

  const handleOnCloseMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(false);
    setIsVariationForm(false);
  };

  const handleOnClickVariationButton = (e) => {
    setIsVariationForm(!isVariationForm);
  };

  let statsPlusPotential = {
    hp: stats.hpValues.map((stat) => stat + bonusHpFromPotential),
    atk: stats.atkValues.map((stat) => stat + bonusStatFromPotentialExceptHp),
    def: stats.defValues.map((stat) => stat + bonusStatFromPotentialExceptHp),
    spa: stats.spaValues.map((stat) => stat + bonusStatFromPotentialExceptHp),
    spd: stats.spdValues.map((stat) => stat + bonusStatFromPotentialExceptHp),
    spe: stats.speValues.map((stat) => stat + bonusStatFromPotentialExceptHp),
    atkScale: stats.atkScale || 100,
    defScale: stats.defScale || 100,
    spaScale: stats.spaScale || 100,
    spdScale: stats.spdScale || 100,
    speScale: stats.speScale || 100,
  };

  const preVariationMoves = [
    moves.move1,
    moves.move2,
    moves.move3,
    moves.move4,
  ];
  let preVariationPassives;
  let postVariationMoves;
  let postVariationPassives;
  if (passives.passive4) {
    preVariationPassives = [
      passives.passive1,
      passives.passive2,
      passives.passive3,
      passives.passive4,
    ];
  } else if (passives.passive3) {
    preVariationPassives = [
      passives.passive1,
      passives.passive2,
      passives.passive3,
    ];
  } else if (passives.passive2) {
    preVariationPassives = [passives.passive1, passives.passive2];
  } else {
    preVariationPassives = [passives.passive1];
  }

  if (passives.formPassive) {
    preVariationPassives = [passives.formPassive, ...preVariationPassives];
  }

  if (variationForm) {
    postVariationMoves = variationForm.moves
      ? [
          variationForm.moves.move1 ? variationForm.moves.move1 : moves.move1,
          variationForm.moves.move2 ? variationForm.moves.move2 : moves.move2,
          variationForm.moves.move3 ? variationForm.moves.move3 : moves.move3,
          variationForm.moves.move4 ? variationForm.moves.move4 : moves.move4,
        ]
      : preVariationMoves;

    if (variationForm.passives) {
      postVariationPassives = passives.formPassive
        ? [
            variationForm.passives.formPassive || passives.formPassive,
            variationForm.passives.passive1 || passives.passive1,
            variationForm.passives.passive2 || passives.passive2,
            variationForm.passives.passive3 || passives.passive3,
            variationForm.passives.passive4 || passives.passive4,
          ]
        : [
            variationForm.passives.passive1 || passives.passive1,
            variationForm.passives.passive2 || passives.passive2,
            variationForm.passives.passive3 || passives.passive3,
            variationForm.passives.passive4 || passives.passive4,
          ];
    } else {
      postVariationPassives = preVariationPassives;
    }
  }

  return (
    <Dialog
      open={isMovesAndSkillsModalVisible}
      onClose={handleOnCloseMovesAndSkillsModal}
      fullWidth={true}
      maxWidth="md"
      scroll="body"
    >
      <DialogTitle>
        {variationForm
          ? isVariationForm
            ? `${trainerNameByLanguage[language]} & ${
                pokemonNameByLanguage[language]
              } (${roleTypeNameByLanguage[language]}) (${
                variationForm.monsterFormByLanguage[language] || 'Mega'
              })`
            : `${trainerNameByLanguage[language]} & ${
                pokemonNameByLanguage[language]
              } (${roleTypeNameByLanguage[language]}) (${
                monsterFormByLanguage[language] || 'Pre-Mega'
              })`
          : `${trainerNameByLanguage[language]} & ${pokemonNameByLanguage[language]} (${roleTypeNameByLanguage[language]})`}
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
        <TableContainer component={Paper} style={{ marginTop: 10 }}>
          <RarityDropdown
            rarity={rarity}
            selectedRarity={selectedRarity}
            handleOnChangeRarity={handleOnChangeRarity}
          />
          <PotentialDropdown
            selectedPotential={selectedPotential}
            handleOnChangePotential={handleOnChangePotential}
          />
          <Table aria-label="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Lv135 Stats</TableCell>
                <TableCell align="right">Base</TableCell>
                {isVariationForm && variationForm.isMega ? (
                  <TableCell align="right">Mega</TableCell>
                ) : null}
                <TableCell align="right">Grid</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Stats
                statsPlusPotential={statsPlusPotential}
                selectedStatTiles={selectedMoves[0]}
                rarity={rarity}
                selectedRarity={selectedRarity}
                isVariationForm={isVariationForm}
                variationForm={variationForm}
                trainerId={trainerId}
                // pokemon={pokemon}
              />
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer component={Paper} style={{ marginTop: 10 }}>
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
              {!isVariationForm
                ? preVariationMoves.map((move, index) => (
                    <Moves
                      key={index}
                      language={language}
                      move={move}
                      selectedMoves={selectedMoves}
                      syncLevel={syncLevel}
                    />
                  ))
                : postVariationMoves.map((move, index) => (
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
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Base Power</TableCell>
                <TableCell align="right">Grid</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!isVariationForm ? (
                <SyncMove
                  language={language}
                  syncMove={moves.syncMove}
                  selectedMoves={selectedMoves}
                  syncLevel={syncLevel}
                />
              ) : (
                <SyncMove
                  language={language}
                  syncMove={
                    variationForm.moves
                      ? variationForm.moves.syncMove
                        ? variationForm.moves.syncMove
                        : moves.syncMove
                      : moves.syncMove
                  }
                  selectedMoves={selectedMoves}
                  syncLevel={syncLevel}
                />
              )}
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
              {!isVariationForm
                ? preVariationPassives.map((passive, index) =>
                    passive ? (
                      <Passives
                        key={index}
                        language={language}
                        passive={passive}
                      />
                    ) : null
                  )
                : postVariationPassives.map((passive, index) =>
                    passive ? (
                      <Passives
                        key={index}
                        language={language}
                        passive={passive}
                      />
                    ) : null
                  )}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}
