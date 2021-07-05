import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SyncGrid from '../common/SyncGrid';
// import { MovesAndSkillsButtonMobile } from '../../MovesAndSkills';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getSyncPairNameAndIdByTrainerId } from '../../../utils/functions';

const useStyles = makeStyles((theme) => ({
  box: {
    // height: 720,
    width: '100vw',
    maxWidth: 500,
    margin: 'auto',
  },
  boxDark: {
    // height: 720,
    width: '100vw',
    maxWidth: 500,
    background: 'black',
  },
  expanded: {
    width: '100%',
    '&$expanded': {
      margin: 0,
    },
  },
}));

const SyncGridContainer = (props) => {
  const classes = useStyles();
  // const darkMode = useSelector((state) => state.darkMode.mode);
  // const dispatch = useDispatch();
  const { teamMemberData, slot, marginT, paddingB } = props;
  const language = useSelector((state) => state.language.currentLanguage);

  return (
    <ExpansionPanel
      className={classes.expanded}
      TransitionProps={{ unmountOnExit: true }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          {
            getSyncPairNameAndIdByTrainerId(teamMemberData.trainerId)[
              'syncPairNameByLanguage'
            ][language]
          }
        </Typography>
      </ExpansionPanelSummary>
      {/* <Box className={darkMode ? classes.boxDark : classes.box}> */}
      <Box className={classes.box}>
        <div style={{ position: 'relative', paddingTop: 5 }}>
          <div style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}>
            E: {teamMemberData.remainingEnergy}/60
            <br />
            O: {teamMemberData.orbSpent}/750
          </div>

          {/* <div style={{ marginLeft: 8, marginTop: -7 }}>
            <MovesAndSkillsButtonMobile
              trainerId={trainerId}
              // pokemon={pokemonName}
              selectedCellsById={selectedCellsById}
              syncLevel={syncLevels[slot]}
              language={language}
              isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
              setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
            />
          </div>
          <div style={{ marginLeft: 8, marginTop: 8 }}>
            <ResetIndividualGridButton slot={slot} />
          </div> */}
          <div
            style={{
              marginTop: marginT ? marginT : 70,
              paddingBottom: paddingB ? paddingB : 20,
            }}
          >
            <SyncGrid teamMemberData={teamMemberData} slot={slot} />
          </div>
        </div>
      </Box>
    </ExpansionPanel>
  );
};

export default SyncGridContainer;