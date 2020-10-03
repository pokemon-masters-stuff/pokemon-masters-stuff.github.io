import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SyncGrid from '../SyncGrid';
import ResetIndividualGridButton from '../ResetIndividualGridButton';
import LoadIndividualBuildDropdown from '../LoadIndividualBuildDropdown';
import SyncLevelDropdown from '../SyncLevelDropdown';
import { MovesAndSkillsButtonMobile } from '../../MovesAndSkills';
import {
  setTeamSyncLevels,
  updateTeamUrl,
} from '../../../actions/actionCreators';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 800,
    width: 500,
  },
}));

const SyncGridContainer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pokemon, slot } = props;
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

  const [
    isMovesAndSkillsModalVisible,
    setIsMovesAndSkillsModalVisible,
  ] = useState(false);

  return (
    <Paper className={classes.paper}>
      <div style={{ position: 'relative', paddingTop: 5 }}>
        <SyncLevelDropdown
          syncLevel={syncLevels[slot]}
          handleChangeSyncLevel={handleChangeSyncLevel}
        />
        <LoadIndividualBuildDropdown {...props} />
        <br />
        <div style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}>
          E: {remainingEnergy[slot]}/60
          <br />
          O: {orbSpent[slot]}/750
        </div>

        <div style={{ marginLeft: 8, marginTop: -7 }}>
          <MovesAndSkillsButtonMobile
            pokemon={pokemon}
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
          <SyncGrid {...props} syncLevel={syncLevels[slot]} />
        </div>
      </div>
    </Paper>
  );
};

export default SyncGridContainer;
