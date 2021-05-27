import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SyncGrid from '../common/SyncGrid';
import ResetIndividualGridButton from '../common/ResetIndividualGridButton';
import LoadIndividualBuildDropdown from '../common/LoadIndividualBuildDropdown';
import SyncLevelDropdown from '../common/SyncLevelDropdown';
import { MovesAndSkillsButtonMobile } from '../../MovesAndSkills';
import {
  setTeamSyncLevels,
  updateTeamUrl,
} from '../../../actions/actionCreators';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  box: {
    height: 800,
    width: 500,
  },
}));

const SyncGridContainer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pokemon, syncPairName, slot } = props;
  let pokemonName = pokemon;

  // to extract this to utility
  if (syncPairName === 'Olivia & Lycanroc') {
    pokemonName = 'olivia_lycanroc';
  } else if (syncPairName === 'Leon & Charizard') {
    pokemonName = 'leon_charizard';
  } else if (syncPairName === 'Morty & Mismagius') {
    pokemonName = 'morty_mismagius';
  } else if (syncPairName === 'Lt. Surge & Raichu') {
    pokemonName = 'lt_surge_raichu';
  }
  const language = useSelector((state) => state.language.currentLanguage);
  const syncLevels = useSelector((state) => state.grid.teamSyncLevels);
  const remainingEnergy = useSelector(
    (state) => state.grid.teamRemainingEnergy
  );
  const orbSpent = useSelector((state) => state.grid.teamOrbSpent);
  const selectedCellsById = useSelector(
    (state) => state.grid.teamSelectedCellsById[slot]
  );
  // const [syncLevel, setSyncLevel] = useState(syncLevels[slot]);
  // console.log('sync level parent', syncLevel);

  const handleChangeSyncLevel = (syncLevel) => {
    // setSyncLevel(syncLevel);
    dispatch(setTeamSyncLevels({ slot: slot, syncLevel: syncLevel }));
    dispatch(updateTeamUrl());
  };

  const [isMovesAndSkillsModalVisible, setIsMovesAndSkillsModalVisible] =
    useState(false);

  return (
    <Box
      border={2}
      borderColor="text.primary"
      borderRadius={10}
      className={classes.box}
    >
      <div style={{ position: 'relative', paddingTop: 5 }}>
        <SyncLevelDropdown
          syncLevel={syncLevels[slot]}
          handleChangeSyncLevel={handleChangeSyncLevel}
        />
        <LoadIndividualBuildDropdown {...props} />
        <br />

        <Typography
          component="div"
          color="textPrimary"
          style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}
        >
          E: {remainingEnergy[slot]}/60
          <br />
          O: {orbSpent[slot]}/750
        </Typography>

        <div style={{ marginLeft: 8, marginTop: -7 }}>
          <MovesAndSkillsButtonMobile
            pokemon={pokemonName}
            selectedCellsById={selectedCellsById}
            syncLevel={syncLevels[slot]}
            language={language}
            isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
            setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
          />
        </div>
        <div style={{ marginLeft: 8, marginTop: 8 }}>
          <ResetIndividualGridButton slot={slot} />
        </div>
        <div style={{ marginTop: -70 }}>
          <SyncGrid
            pokemon={pokemonName}
            slot={slot}
            syncLevel={syncLevels[slot]}
          />
        </div>
      </div>
    </Box>
  );
};

export default SyncGridContainer;
