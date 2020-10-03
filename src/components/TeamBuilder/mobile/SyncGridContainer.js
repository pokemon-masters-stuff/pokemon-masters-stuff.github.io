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
import Paper from '@material-ui/core/Paper';
import SkillOverview from '../../../components/SkillOverview';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    // height: 720,
    width: '100vw',
  },
}));

const SyncGridContainer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pokemon, syncPairName, slot } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const syncLevels = useSelector((state) => state.grid.teamSyncLevels);
  const remainingEnergy = useSelector(
    (state) => state.grid.teamRemainingEnergy
  );
  const orbSpent = useSelector((state) => state.grid.teamOrbSpent);
  const grid = useSelector((state) => state.grid);
  const selectedCellsById = useSelector(
    (state) => state.grid.teamSelectedCellsById[slot]
  );
  // const [syncLevel, setSyncLevel] = useState(syncLevels[slot]);

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
    <ExpansionPanel className={classes.expanded}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{syncPairName}</Typography>
      </ExpansionPanelSummary>
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
          <div style={{ marginTop: 20, paddingBottom: 20 }}>
            <SyncGrid {...props} syncLevel={syncLevels[slot]} />
          </div>
        </div>
        <SkillOverview
          skill={grid.gridData.name}
          description={
            grid.gridData.description ? grid.gridData.description : ''
          }
          energy={grid.gridData.energy}
        />
      </Paper>
    </ExpansionPanel>
  );
};

export default SyncGridContainer;
