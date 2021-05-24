import React from 'react';
import { useSelector } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import UI from '../../../utils/translations';
import LUCKY_SKILL_LIST from '../../../data/luckySkills.json';

const BuildDescription = ({ classes, build }) => {
  const language = useSelector((state) => state.language.currentLanguage);
  return (
    <ExpansionPanel className={classes.expanded}>
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
          <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
            {UI['Remaining Energy'][language]}:{' '}
          </span>
          <span>{build.remainingEnergy}</span>
          <br />
          <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
            {UI['Orbs Spent'][language]}:{' '}
          </span>
          <span>{build.orbSpent}</span>
          <br />

          {build.syncLevel ? (
            <>
              <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                {UI['Sync Move Level'][language]}:{' '}
              </span>
              <span>{build.syncLevel}</span>
              <br />
            </>
          ) : null}

          {build.luckySkillId ? (
            <>
              <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
                {UI['Lucky Skill'][language]}:{' '}
              </span>
              <span>
                {' '}
                {LUCKY_SKILL_LIST[build.luckySkillId][language] || '-'}
              </span>
              <br />
            </>
          ) : null}

          <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
            {UI['Description'][language]}:{' '}
          </span>
          <br />
          <span style={{ whiteSpace: 'pre-line' }}>
            {build.description || 'None'}
          </span>
          <br />
          <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
            {' '}
            {UI['Date'][language]}:{' '}
          </span>
          <span>{build.date.substring(0, 10)}</span>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default BuildDescription;
