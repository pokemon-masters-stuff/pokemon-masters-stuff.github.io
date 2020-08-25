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
import Paper from '@material-ui/core/Paper';
import RarityDropdown from './RarityDropdown';
import PotentialDropdown from './PotentialDropdown';
import AffinityLevelDropdown from './AffinityLevelDropdown';
import AffinityProgressDropdown from './AffinityProgressDropdown';
import { getEggPokemonDataByNameAndRole } from '../../utils/functions';

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
    baseStats,
    rarity,
    selectedRarity,
    statBonusFromAffinity,
    hpBonusFromPotential,
    statBonusFromPotentialExceptHp,
  } = props;

  const { hp, atk, def, spa, spd, spe } = baseStats;

  const classes = useRowStyles();

  let baseHp = hp[4] + (selectedRarity - rarity) * 40;
  let baseAtk = atk[4] + (selectedRarity - rarity) * 20;
  let baseDef = def[4] + (selectedRarity - rarity) * 20;
  let baseSpa = spa[4] + (selectedRarity - rarity) * 20;
  let baseSpd = spd[4] + (selectedRarity - rarity) * 20;
  let baseSpe = spe[4] + (selectedRarity - rarity) * 20;

  return (
    <Fragment>
      <TableRow key="hp" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          HP
        </TableCell>
        <TableCell align="right">{baseHp}</TableCell>
        <TableCell align="right">{hpBonusFromPotential}</TableCell>
        <TableCell align="right">{statBonusFromAffinity['hp']}</TableCell>
        <TableCell align="right">
          {baseHp + hpBonusFromPotential + statBonusFromAffinity['hp']}
        </TableCell>
      </TableRow>
      <TableRow key="atk" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Attack
        </TableCell>
        <TableCell align="right">{baseAtk}</TableCell>
        <TableCell align="right">{statBonusFromPotentialExceptHp}</TableCell>
        <TableCell align="right">{statBonusFromAffinity['atk']}</TableCell>
        <TableCell align="right">
          {baseAtk +
            statBonusFromPotentialExceptHp +
            statBonusFromAffinity['atk']}
        </TableCell>
      </TableRow>
      <TableRow key="def" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Defense
        </TableCell>
        <TableCell align="right">{baseDef}</TableCell>
        <TableCell align="right">{statBonusFromPotentialExceptHp}</TableCell>
        <TableCell align="right">{statBonusFromAffinity['def']}</TableCell>
        <TableCell align="right">
          {baseDef +
            statBonusFromPotentialExceptHp +
            statBonusFromAffinity['def']}
        </TableCell>
      </TableRow>
      <TableRow key="spa" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Sp.Atk
        </TableCell>
        <TableCell align="right">{baseSpa}</TableCell>
        <TableCell align="right">{statBonusFromPotentialExceptHp}</TableCell>
        <TableCell align="right">{statBonusFromAffinity['spa']}</TableCell>
        <TableCell align="right">
          {baseSpa +
            statBonusFromPotentialExceptHp +
            statBonusFromAffinity['spa']}
        </TableCell>
      </TableRow>
      <TableRow key="spd" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Sp.Def
        </TableCell>
        <TableCell align="right">{baseSpd}</TableCell>
        <TableCell align="right">{statBonusFromPotentialExceptHp}</TableCell>
        <TableCell align="right">{statBonusFromAffinity['spd']}</TableCell>
        <TableCell align="right">
          {baseSpd +
            statBonusFromPotentialExceptHp +
            statBonusFromAffinity['spd']}
        </TableCell>
      </TableRow>
      <TableRow key="spe" className={classes.root}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          Speed
        </TableCell>
        <TableCell align="right">{baseSpe}</TableCell>
        <TableCell align="right">{statBonusFromPotentialExceptHp}</TableCell>
        <TableCell align="right">{statBonusFromAffinity['spe']}</TableCell>
        <TableCell align="right">
          {baseSpe +
            statBonusFromPotentialExceptHp +
            statBonusFromAffinity['spe']}
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

function Moves(props) {
  const { language, move, syncLevel } = props;

  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
      </TableRow>

      <TableRow className={classes.root}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="details">
                <TableHead>
                  <TableRow key={move.name[language]}>
                    <TableCell align="left">Description</TableCell>
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
                      {move.category ? moveCategory : '-'}
                    </TableCell>
                    <TableCell align="left">
                      {move.targetType ? move.targetType[language] : '-'}
                    </TableCell>
                    <TableCell align="right">
                      {move.accuracy ? move.accuracy : '-'}
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
  const { language, syncMove, syncLevel } = props;

  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
          {syncMove.category ? syncMoveCategory : '-'}
        </TableCell>
        <TableCell align="right">
          {syncMove.power
            ? syncMove.power +
              Math.floor(syncMove.power * ((Number(syncLevel) - 1) * 0.05))
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
  const { language, pokemonName, pokemonRole, syncLevel } = props;
  //   const syncLevel = useSelector((state) => state.grid.syncLevel);

  // const pokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const roles = { 'P.Strike': 0, 'S.Strike': 1, Support: 2, Tech: 3 };
  const pokemonData = getEggPokemonDataByNameAndRole(
    pokemonName,
    roles[pokemonRole]
  );
  const { stats, moves, passives, rarity } = pokemonData;

  // const [isMega, setIsMega] = useState(false);

  const [selectedRarity, setSelectedRarity] = useState(rarity);
  const [selectedPotential, setSelectedPotential] = useState(0);
  const [selectedAffinityLevel, setSelectedAffinityLevel] = useState('1/3');
  const [selectedAffinityProgress, setSelectedAffinityProgress] = useState(0);

  let hpBonusFromPotential =
    rarity === 5 ? selectedPotential * 5 || 0 : selectedPotential * 2 || 0;

  let statBonusFromPotentialExceptHp =
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
    setSelectedRarity(rarity);
    setSelectedPotential(0);
    setSelectedAffinityLevel('1/3');
    setSelectedAffinityProgress(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName, pokemonRole]);

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
  };

  const handleOnChangePotential = (value) => {
    setSelectedPotential(value);
  };

  const handleOnChangeAffinityLevel = (value) => {
    setSelectedAffinityLevel(value);
  };

  const handleOnChangeAffinityProgress = (value) => {
    setSelectedAffinityProgress(value);
  };

  // const handleOnClickMegaButton = (e) => {
  //   setIsMega(!isMega);
  // };

  // let baseStats = {
  //   hp: stats.hpValues.map((stat) => stat + hpBonusFromPotential),
  //   atk: stats.atkValues.map((stat) => stat + statBonusFromPotentialExceptHp),
  //   def: stats.defValues.map((stat) => stat + statBonusFromPotentialExceptHp),
  //   spa: stats.spaValues.map((stat) => stat + statBonusFromPotentialExceptHp),
  //   spd: stats.spdValues.map((stat) => stat + statBonusFromPotentialExceptHp),
  //   spe: stats.speValues.map((stat) => stat + statBonusFromPotentialExceptHp),
  //   atkScale: stats.atkScale || 100,
  //   defScale: stats.defScale || 100,
  //   spaScale: stats.spaScale || 100,
  //   spdScale: stats.spdScale || 100,
  //   speScale: stats.speScale || 100,
  // };

  let baseStats = {
    hp: stats.hpValues,
    atk: stats.atkValues,
    def: stats.defValues,
    spa: stats.spaValues,
    spd: stats.spdValues,
    spe: stats.speValues,
  };

  let statBonusFromAffinity = {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0,
  };

  if (pokemonRole === 'P.Strike' || pokemonRole === 'S.Strike') {
    statBonusFromAffinity['hp'] =
      selectedAffinityProgress * 2 + (selectedAffinityLevelNum - 1) * 40;
    statBonusFromAffinity['atk'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spa'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spe'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
  } else if (pokemonRole === 'Support') {
    statBonusFromAffinity['hp'] =
      selectedAffinityProgress * 2 + (selectedAffinityLevelNum - 1) * 40;
    statBonusFromAffinity['def'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spd'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spe'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
  } else {
    statBonusFromAffinity['atk'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spa'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['def'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
    statBonusFromAffinity['spd'] =
      selectedAffinityProgress * 1 + (selectedAffinityLevelNum - 1) * 20;
  }

  const preMegaMoves = [moves.move1, moves.move2, moves.move3, moves.move4];
  let preMegaPassives;
  // let postMegaMoves;
  // let postMegaPassives;
  if (passives.passive3) {
    preMegaPassives = [passives.passive1, passives.passive2, passives.passive3];
  } else if (passives.passive2) {
    preMegaPassives = [passives.passive1, passives.passive2];
  } else {
    preMegaPassives = [passives.passive1];
  }

  // if (megaForm) {
  //   postMegaMoves = megaForm.moves
  //     ? [
  //         megaForm.moves.move1 ? megaForm.moves.move1 : moves.move1,
  //         megaForm.moves.move2 ? megaForm.moves.move2 : moves.move2,
  //         megaForm.moves.move3 ? megaForm.moves.move3 : moves.move3,
  //         megaForm.moves.move4 ? megaForm.moves.move4 : moves.move4,
  //       ]
  //     : preMegaMoves;

  //   if (megaForm.passives) {
  //     if (megaForm.passives.passive3) {
  //       postMegaPassives = [
  //         megaForm.passives.passive1,
  //         megaForm.passives.passive2,
  //         megaForm.passives.passive3,
  //       ];
  //     } else if (megaForm.passives.passive2) {
  //       postMegaPassives = [
  //         megaForm.passives.passive1,
  //         megaForm.passives.passive2,
  //       ];
  //     } else {
  //       postMegaPassives = [megaForm.passives.passive1];
  //     }
  //   } else {
  //     postMegaPassives = preMegaPassives;
  //   }
  // }

  return (
    // <Dialog>
    //   <DialogTitle>
    //     {UI["Moves & Skills"][language]}
    //     {megaForm ? (
    //       <Button
    //         style={{ float: "right" }}
    //         variant="outlined"
    //         onClick={handleOnClickMegaButton}
    //       >
    //         {isMega ? "pre-Mega" : "Mega"}
    //       </Button>
    //     ) : null}
    //   </DialogTitle>
    //   <DialogContent dividers>
    <div>
      <TableContainer
        component={Paper}
        style={{ marginTop: 10, paddingTop: 5 }}
      >
        <RarityDropdown
          rarity={rarity}
          selectedRarity={selectedRarity}
          handleOnChangeRarity={handleOnChangeRarity}
        />
        <PotentialDropdown
          selectedPotential={selectedPotential}
          handleOnChangePotential={handleOnChangePotential}
        />
        <AffinityLevelDropdown
          selectedAffinityLevel={selectedAffinityLevel}
          handleOnChangeAffinityLevel={handleOnChangeAffinityLevel}
        />
        <AffinityProgressDropdown
          selectedAffinityProgress={selectedAffinityProgress}
          handleOnChangeAffinityProgress={handleOnChangeAffinityProgress}
        />
        <Table aria-label="table" size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Lv120 Stats</TableCell>
              <TableCell align="right">Base</TableCell>
              <TableCell align="right">Potential</TableCell>
              <TableCell align="right">Affinity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Stats
              baseStats={baseStats}
              rarity={rarity}
              selectedRarity={selectedRarity}
              selectedAffinityLevel={selectedAffinityLevel}
              selectedAffinityProgress={selectedAffinityProgress}
              hpBonusFromPotential={hpBonusFromPotential}
              statBonusFromPotentialExceptHp={statBonusFromPotentialExceptHp}
              statBonusFromAffinity={statBonusFromAffinity}
              // isMega={isMega}
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
            </TableRow>
          </TableHead>
          <TableBody>
            {preMegaMoves.map((move, index) => (
              <Moves
                key={index}
                language={language}
                move={move}
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
              <TableCell align="left">Category</TableCell>
              <TableCell align="right">Base Power</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <SyncMove
              language={language}
              syncMove={moves.syncMove}
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
            {preMegaPassives.map((passive, index) => (
              <Passives key={index} language={language} passive={passive} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    //   </DialogContent>
    // </Dialog>
  );
}
