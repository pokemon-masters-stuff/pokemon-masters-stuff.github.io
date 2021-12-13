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
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import UI from '../../utils/translations';
import RarityDropdown from './RarityDropdown';
import PotentialDropdown from './PotentialDropdown';
import {
  getPokemonDataByTrainerId,
  getEggPokemonDataByTrainerId,
} from '../../utils/functions';
import { icons } from '../../images/Icons/exportImagesAsObject';
import { typesByLanguage } from '../../utils/constants';
import AffinityLevelDropdown from './AffinityLevelDropdown';
import AffinityProgressDropdown from './AffinityProgressDropdown';
import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  gauge: {
    width: '11px',
    height: '6px',
    background: 'radial-gradient(LightBlue, DeepSkyBlue)',
    border: '1px solid blue',
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
    statBonusFromAffinity,
    isEgg,
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

  let lv140Hp = hp[3] + ((hp[4] - hp[3]) / (120 - 100)) * 40;
  let lv140Atk = atk[3] + ((atk[4] - atk[3]) / (120 - 100)) * 40;
  let lv140Def = def[3] + ((def[4] - def[3]) / (120 - 100)) * 40;
  let lv140Spa = spa[3] + ((spa[4] - spa[3]) / (120 - 100)) * 40;
  let lv140Spd = spd[3] + ((spd[4] - spd[3]) / (120 - 100)) * 40;
  let lv140Spe = spe[3] + ((spe[4] - spe[3]) / (120 - 100)) * 40;

  // if (trainerId === '10137000000') {
  //   lv140Hp = 354;
  //   lv140Atk = 254;
  //   lv140Def = 254;
  //   lv140Spa = 254;
  //   lv140Spd = 254;
  //   lv140Spe = 254;
  // }

  // let baseHp = hp[4] + (selectedRarity - rarity) * 40;
  let baseHp = Math.floor(lv140Hp + (selectedRarity - rarity) * 40);
  let baseAtk = Math.floor(lv140Atk + (selectedRarity - rarity) * 20);
  let baseDef = Math.floor(lv140Def + (selectedRarity - rarity) * 20);
  let baseSpa = Math.floor(lv140Spa + (selectedRarity - rarity) * 20);
  let baseSpd = Math.floor(lv140Spd + (selectedRarity - rarity) * 20);
  let baseSpe = Math.floor(lv140Spe + (selectedRarity - rarity) * 20);

  if (isVariationForm) {
    // console.log(atkScale, defScale, spaScale, spdScale, speScale);
    atkUpFromVariation = Math.floor(baseAtk * (atkScale / 100 - 1));
    defUpFromVariation = Math.floor(baseDef * (defScale / 100 - 1));
    spaUpFromVariation = Math.floor(baseSpa * (spaScale / 100 - 1));
    spdUpFromVariation = Math.floor(baseSpd * (spdScale / 100 - 1));
    speUpFromVariation = Math.floor(baseSpe * (speScale / 100 - 1));
    // console.log(
    //   atkUpFromVariation,
    //   defUpFromVariation,
    //   spaUpFromVariation,
    //   spdUpFromVariation,
    //   speUpFromVariation
    // );
  }

  return (
    <Fragment>
      <TableRow key="hp" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          HP
        </TableCell>
        <TableCell align="right">{baseHp}</TableCell>
        {isVariationForm ? <TableCell align="right">{'-'}</TableCell> : null}
        {!isEgg ? (
          <>
            <TableCell align="right">{hpUpFromGrid || '-'}</TableCell>
            <TableCell align="right">{baseHp + hpUpFromGrid}</TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">
              {statBonusFromAffinity['hp'] || '-'}
            </TableCell>
            <TableCell align="right">
              {baseHp + statBonusFromAffinity['hp']}
            </TableCell>
          </>
        )}
      </TableRow>
      <TableRow key="atk" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Attack
        </TableCell>
        <TableCell align="right">{baseAtk}</TableCell>
        {isVariationForm ? (
          <TableCell align="right">{atkUpFromVariation || '-'}</TableCell>
        ) : null}
        {!isEgg ? (
          <>
            <TableCell align="right">{atkUpFromGrid || '-'}</TableCell>
            <TableCell align="right">
              {isVariationForm
                ? baseAtk + atkUpFromGrid + atkUpFromVariation
                : baseAtk + atkUpFromGrid}
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">
              {statBonusFromAffinity['atk'] || '-'}
            </TableCell>
            <TableCell align="right">
              {baseAtk + statBonusFromAffinity['atk']}
            </TableCell>
          </>
        )}
      </TableRow>
      <TableRow key="def" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Defense
        </TableCell>
        <TableCell align="right">{baseDef}</TableCell>
        {isVariationForm ? (
          <TableCell align="right">{defUpFromVariation || '-'}</TableCell>
        ) : null}
        {!isEgg ? (
          <>
            <TableCell align="right">{defUpFromGrid || '-'}</TableCell>
            <TableCell align="right">
              {isVariationForm
                ? baseDef + defUpFromGrid + defUpFromVariation
                : baseDef + defUpFromGrid}
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">
              {statBonusFromAffinity['def'] || '-'}
            </TableCell>
            <TableCell align="right">
              {baseDef + statBonusFromAffinity['def']}
            </TableCell>
          </>
        )}
      </TableRow>
      <TableRow key="spa" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Sp.Atk
        </TableCell>
        <TableCell align="right">{baseSpa}</TableCell>
        {isVariationForm ? (
          <TableCell align="right">{spaUpFromVariation || '-'}</TableCell>
        ) : null}
        {!isEgg ? (
          <>
            <TableCell align="right">{spaUpFromGrid || '-'}</TableCell>
            <TableCell align="right">
              {isVariationForm
                ? baseSpa + spaUpFromGrid + spaUpFromVariation
                : baseSpa + spaUpFromGrid}
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">
              {statBonusFromAffinity['spa'] || '-'}
            </TableCell>
            <TableCell align="right">
              {baseSpa + statBonusFromAffinity['spa']}
            </TableCell>
          </>
        )}
      </TableRow>
      <TableRow key="spd" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Sp.Def
        </TableCell>
        <TableCell align="right">{baseSpd}</TableCell>
        {isVariationForm ? (
          <TableCell align="right">{spdUpFromVariation || '-'}</TableCell>
        ) : null}
        {!isEgg ? (
          <>
            <TableCell align="right">{spdUpFromGrid || '-'}</TableCell>
            <TableCell align="right">
              {isVariationForm
                ? baseSpd + spdUpFromGrid + spdUpFromVariation
                : baseSpd + spdUpFromGrid}
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">
              {statBonusFromAffinity['spd'] || '-'}
            </TableCell>
            <TableCell align="right">
              {baseSpd + statBonusFromAffinity['spd']}
            </TableCell>
          </>
        )}
      </TableRow>
      <TableRow key="spe" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Speed
        </TableCell>
        <TableCell align="right">{baseSpe}</TableCell>
        {isVariationForm ? (
          <TableCell align="right">{speUpFromVariation || '-'}</TableCell>
        ) : null}
        {!isEgg ? (
          <>
            <TableCell align="right">{speUpFromGrid || '-'}</TableCell>
            <TableCell align="right">
              {isVariationForm
                ? baseSpe + speUpFromGrid + speUpFromVariation
                : baseSpe + speUpFromGrid}
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="right">
              {statBonusFromAffinity['spe'] || '-'}
            </TableCell>
            <TableCell align="right">
              {baseSpe + statBonusFromAffinity['spe']}
            </TableCell>
          </>
        )}
      </TableRow>
    </Fragment>
  );
}

function Moves(props) {
  const { language, move, selectedMoves, syncLevel, size, openAll } = props;

  const [open, setOpen] = React.useState(openAll);
  const classes = useRowStyles();

  let powerUpFromGrid = selectedMoves
    ? selectedMoves[move.id]
      ? selectedMoves[move.id].power || 0
      : 0
    : 0;

  let accuracyUpFromGrid = selectedMoves
    ? selectedMoves[move.id]
      ? selectedMoves[move.id].accuracy || 0
      : 0
    : 0;

  let moveCategory = '-';

  if (move.category === 1) {
    moveCategory = 'Physical';
  } else if (move.category === 2) {
    moveCategory = 'Special';
  } else if (move.category === 3) {
    moveCategory = 'Status';
  }

  React.useEffect(() => {
    setOpen(openAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAll]);

  let gaugeArray = [];
  for (var i = 0; i < Number(move.gaugeDrain); i++) {
    gaugeArray.push(
      <div
        key={i}
        className={classes.gauge}
        style={
          i === 0
            ? { display: 'inline-block' }
            : { display: 'inline-block', marginLeft: 2 }
        }
      ></div>
    );
  }

  return (
    <Fragment>
      <TableRow key={move.name[language]} className={classes.root}>
        <TableCell style={{ paddingRight: 0 }} width="10%">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{ paddingRight: 0, marginRight: 0 }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {move.name[language]}
          {icons[typesByLanguage[move.type]['en']] ? (
            <>
              &nbsp;
              <img
                width="20"
                height="20"
                src={icons[typesByLanguage[move.type]['en']]}
              />
            </>
          ) : null}
        </TableCell>
        <TableCell align="center">
          {icons[moveCategory] ? (
            <>
              <img
                width="25"
                // height="20"
                src={icons[moveCategory]}
              />
            </>
          ) : null}
        </TableCell>
        <TableCell align="center">
          {move.gaugeDrain ? gaugeArray : null}
          {move.gaugeDrain && move.maxUses ? ' ' : null}
          {move.maxUses ? `${move.maxUses}/${move.maxUses}` : null}
        </TableCell>
        {/* <TableCell align="center">
          {move.maxUses ? move.maxUses : '-'}
        </TableCell> */}
        <TableCell align="center">
          {move.power
            ? move.power +
              Math.floor(move.power * ((Number(syncLevel) - 1) * 0.05))
            : '-'}
          {powerUpFromGrid
            ? ` + ${powerUpFromGrid} = ${
                move.power +
                Math.floor(move.power * ((Number(syncLevel) - 1) * 0.05)) +
                powerUpFromGrid
              }`
            : null}
        </TableCell>
        <TableCell align="center">
          {move.accuracy ? move.accuracy : '-'}
          {accuracyUpFromGrid
            ? ` + ${accuracyUpFromGrid} = ${move.accuracy + accuracyUpFromGrid}`
            : null}
        </TableCell>
        <TableCell align="center">
          {move.targetType ? move.targetType[language] : '-'}
        </TableCell>
      </TableRow>

      <TableRow className={classes.root}>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={size === 'small' ? 4 : 8}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="details">
                <TableHead></TableHead>
                <TableBody>
                  <TableRow key={move.name[language]}>
                    {size === 'large' ? <TableCell width="10%" /> : null}
                    <TableCell align="left">
                      {move.description[language]}
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
  const { language, syncMove, selectedMoves, syncLevel, size, openAll } = props;

  const [open, setOpen] = React.useState(openAll);
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

  React.useEffect(() => {
    setOpen(openAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAll]);

  return (
    <Fragment>
      <TableRow key={syncMove.name[language]} className={classes.root}>
        <TableCell style={{ paddingRight: 0 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{ paddingRight: 0, marginRight: 0 }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {syncMove.name[language]}
          {icons[typesByLanguage[syncMove.type]['en']] ? (
            <>
              &nbsp;
              <img
                width="20"
                height="20"
                src={icons[typesByLanguage[syncMove.type]['en']]}
              />
            </>
          ) : null}
        </TableCell>
        <TableCell align="center">
          {icons[syncMoveCategory] ? (
            <>
              &nbsp;
              <img
                width="25"
                // height="20"
                src={icons[syncMoveCategory]}
              />
            </>
          ) : null}
        </TableCell>
        <TableCell align="center">
          {syncMove.power
            ? syncMove.power +
              Math.floor(syncMove.power * ((Number(syncLevel) - 1) * 0.05))
            : '-'}
          {powerUpFromGrid
            ? ` + ${powerUpFromGrid} = ${
                syncMove.power +
                Math.floor(syncMove.power * ((Number(syncLevel) - 1) * 0.05)) +
                powerUpFromGrid
              }`
            : null}
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
                    {size === 'large' ? <TableCell width="10%" /> : null}
                    <TableCell align="left">
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
  const { language, passive, size, openAll } = props;

  const [open, setOpen] = React.useState(openAll);
  const classes = useRowStyles();

  React.useEffect(() => {
    setOpen(openAll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAll]);

  return (
    <Fragment>
      <TableRow key={passive.name[language]} className={classes.root}>
        <TableCell style={{ paddingRight: 0 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{ paddingRight: 0, marginRight: 0 }}
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
                {/* <TableHead></TableHead> */}
                <TableBody>
                  <TableRow key={passive.name[language]}>
                    {size === 'large' ? <TableCell width="10%" /> : null}
                    <TableCell
                      align="left"
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

export default function MovesAndSkillsModalContent(props) {
  const {
    trainerId,
    // pokemon,
    selectedCellsById,
    syncLevel,
    language,
    isVariationForm,
    isDynamaxForm,
    size,
    isEgg,
    isEX,
  } = props;

  // console.log('selectedCellsById', selectedCellsById);

  // const selectedCellsById = grid.selectedCellsById;

  // const syncLevel = useSelector((state) => state.grid.syncLevel);

  const selectedCellsArray = selectedCellsById
    ? Object.values(selectedCellsById)
    : [];

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

  let pokemonData = isEgg
    ? getEggPokemonDataByTrainerId(trainerId)
    : getPokemonDataByTrainerId(trainerId);

  const { stats, moves, passives, variationForm, rarity, role } = pokemonData;

  // const [isVariationForm, setIsVariationForm] = useState(false);

  const [selectedRarity, setSelectedRarity] = useState(rarity);
  const [selectedPotential, setSelectedPotential] = useState(0);
  const [selectedAffinityLevel, setSelectedAffinityLevel] = useState('1/3');
  const [selectedAffinityProgress, setSelectedAffinityProgress] = useState(0);

  const [isMax, setIsMax] = useState(false);

  const [openAll, setOpenAll] = useState(false);

  let bonusHpFromPotential =
    rarity === 5 ? selectedPotential * 5 || 0 : selectedPotential * 2 || 0;

  let bonusStatFromPotentialExceptHp =
    rarity === 5 ? selectedPotential * 2 || 0 : selectedPotential || 0;

  let selectedAffinityLevelNum;

  if (selectedAffinityLevel === '1/3') {
    selectedAffinityLevelNum = 1;
  } else if (selectedAffinityLevel === '2/3') {
    selectedAffinityLevelNum = 2;
  } else {
    selectedAffinityLevelNum = 3;
  }

  React.useEffect(() => {
    if (!isEX) {
      setSelectedRarity(rarity);
      setSelectedPotential(0);
      setSelectedAffinityLevel('1/3');
      setSelectedAffinityProgress(0);
    } else {
      setSelectedRarity(5);
      setSelectedPotential(20);
      setIsMax(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trainerId]);

  const handleOnChangeRarity = (value) => {
    let selectedValue;
    if (value === '★') {
      selectedValue = 1;
    } else if (value === '★★') {
      selectedValue = 2;
    } else if (value === '★★★') {
      selectedValue = 3;
    } else if (value === '★★★★') {
      selectedValue = 4;
    } else {
      selectedValue = 5;
    }
    setSelectedRarity(selectedValue);

    if (selectedRarity === 5 && selectedPotential === 20) {
      setIsMax(true);
    }
  };

  const handleOnChangePotential = (value) => {
    setSelectedPotential(value);
    if (selectedRarity === 5 && selectedPotential === 20) {
      setIsMax(true);
    }
  };

  const handleOnChangeAffinityLevel = (value) => {
    setSelectedAffinityLevel(value);
  };

  const handleOnChangeAffinityProgress = (value) => {
    setSelectedAffinityProgress(value);
  };

  const handleOnClickOpenAllButton = (e) => {
    if (openAll) {
      setOpenAll(false);
    } else {
      setOpenAll(true);
    }
    // setOpenAll(!openAll);
  };

  const handleOnClickMaxOrResetButton = (e) => {
    if (isMax || (selectedRarity === 5 && selectedPotential === 20)) {
      setSelectedRarity(rarity);
      setSelectedPotential(0);
      if (isEgg) {
        setSelectedAffinityLevel('1/3');
        setSelectedAffinityProgress(0);
      }
      setIsMax(false);
    } else {
      setSelectedRarity(5);
      setSelectedPotential(20);
      if (isEgg) {
        setSelectedAffinityLevel('3/3');
        setSelectedAffinityProgress(20);
      }
      setIsMax(true);
    }
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

  let statBonusFromAffinity = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  };

  if (role === 0 || role === 1) {
    // Strike
    statBonusFromAffinity['hp'] =
      selectedAffinityProgress * 2 + (selectedAffinityLevelNum - 1) * 40;
    statBonusFromAffinity['atk'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spa'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spe'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
  } else if (role === 2) {
    // Support
    statBonusFromAffinity['hp'] =
      selectedAffinityProgress * 2 + (selectedAffinityLevelNum - 1) * 40;
    statBonusFromAffinity['def'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spd'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spe'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
  } else {
    // Tech
    statBonusFromAffinity['atk'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spa'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['def'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spd'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
  }

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

  if (isDynamaxForm) {
    postVariationMoves = [];

    variationForm.moves.maxMove1 &&
      postVariationMoves.push(variationForm.moves.maxMove1);

    variationForm.moves.maxMove2 &&
      postVariationMoves.push(variationForm.moves.maxMove2);

    variationForm.moves.maxMove3 &&
      postVariationMoves.push(variationForm.moves.maxMove3);

    variationForm.moves.maxMove4 &&
      postVariationMoves.push(variationForm.moves.maxMove4);
  }

  return (
    <>
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

        {isEgg ? (
          <>
            <AffinityLevelDropdown
              selectedAffinityLevel={selectedAffinityLevel}
              handleOnChangeAffinityLevel={handleOnChangeAffinityLevel}
            />
            <AffinityProgressDropdown
              selectedAffinityProgress={selectedAffinityProgress}
              handleOnChangeAffinityProgress={handleOnChangeAffinityProgress}
            />
          </>
        ) : null}

        <Button
          variant="outlined"
          onClick={handleOnClickMaxOrResetButton}
          style={{ marginTop: 9, marginLeft: 8 }}
        >
          {isMax || (selectedRarity === 5 && selectedPotential === 20)
            ? 'RESET'
            : 'MAX'}
        </Button>

        <Button
          variant="outlined"
          onClick={handleOnClickOpenAllButton}
          style={{ marginTop: 9, marginLeft: 8 }}
        >
          <FormatLineSpacingIcon />
        </Button>

        <Table aria-label="table" size="small" style={{ marginTop: 10 }}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Lv140 Stats</TableCell>
              <TableCell align="right">Base</TableCell>
              {isVariationForm ? (
                <TableCell align="right">
                  {variationForm.isMega ? 'Mega' : 'Variation'}
                </TableCell>
              ) : null}
              {!isEgg ? (
                <TableCell align="right">Grid</TableCell>
              ) : (
                <TableCell align="right">Affinity</TableCell>
              )}
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
              statBonusFromAffinity={statBonusFromAffinity}
              isEgg={isEgg}
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
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Gauge/MP</TableCell>
              {/* <TableCell align="center">MP</TableCell> */}
              <TableCell align="center">Power</TableCell>
              <TableCell align="center">Accuracy</TableCell>
              <TableCell align="center">Target</TableCell>
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
                    size={size}
                    openAll={openAll}
                  />
                ))
              : postVariationMoves.map((move, index) => (
                  <Moves
                    key={index}
                    language={language}
                    move={move}
                    selectedMoves={selectedMoves}
                    syncLevel={syncLevel}
                    size={size}
                    openAll={openAll}
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
              <TableCell align="left">Sync Move</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Power</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isVariationForm ? (
              <SyncMove
                language={language}
                syncMove={moves.syncMove}
                selectedMoves={selectedMoves}
                syncLevel={syncLevel}
                size={size}
                openAll={openAll}
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
                size={size}
                openAll={openAll}
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
                      size={size}
                      openAll={openAll}
                    />
                  ) : null
                )
              : postVariationPassives.map((passive, index) =>
                  passive ? (
                    <Passives
                      key={index}
                      language={language}
                      passive={passive}
                      size={size}
                      openAll={openAll}
                    />
                  ) : null
                )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
