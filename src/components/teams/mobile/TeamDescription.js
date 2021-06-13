import React from 'react';
import { useSelector } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import UI from '../../../utils/translations';
import syncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import LUCKY_SKILL_LIST from '../../../data/luckySkills.json';

const TeamDescription = ({ classes, team }) => {
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
          {UI['Description and Details'][language]}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography
          style={{ display: 'inline-block', wordBreak: 'break-word' }}
        >
          <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
            {UI['Description'][language]}:{' '}
          </span>
          <br />
          <span style={{ whiteSpace: 'pre-line' }}>
            {team.description || 'None'}
          </span>
          <br />
          <br />
          <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
            {UI['Lucky Skill'][language]}:{' '}
          </span>
          <br />
          {[
            team.syncPairs.slot1,
            team.syncPairs.slot2,
            team.syncPairs.slot3,
          ].map((teamMemberData, index) =>
            teamMemberData.trainerId ? (
              <span key={`lucky-skill-${index}`}>
                {`${
                  syncPairNamesAndIds[teamMemberData.trainerId][
                    'syncPairNameByLanguage'
                  ][language]
                }${
                  syncPairNamesAndIds[teamMemberData.trainerId]['isEggmon']
                    ? ' (' +
                      syncPairNamesAndIds[teamMemberData.trainerId][
                        'roleTypeNameByLanguage'
                      ][language] +
                      ')'
                    : ''
                }`}
                :{' '}
                {LUCKY_SKILL_LIST[teamMemberData.luckySkillIds[0]][language] ||
                  '-'}
                <br />
              </span>
            ) : null
          )}
          <br />

          <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
            {' '}
            {UI['Date'][language]}:{' '}
          </span>
          <span>{team.date.substring(0, 10)}</span>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default TeamDescription;
