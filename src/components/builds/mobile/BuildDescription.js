import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const BuildDescription = ({ classes, build }) => {
  return (
    <ExpansionPanel className={classes.expanded}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Description and Details
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
            Remaining Energy:{' '}
          </span>
          <span>{build.remainingEnergy}</span>
          <br />
          <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}>
            Orbs Spent:{' '}
          </span>
          <span>{build.orbSpent}</span>
          <br />
          <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>
            Description:{' '}
          </span>
          <br />
          <span style={{ whiteSpace: 'pre-line' }}>
            {build.description || 'None'}
          </span>
          <br />
          <span style={{ color: '#bdbdbd', fontWeight: 'bold' }}>Date: </span>
          <span>{build.date.substring(0, 10)}</span>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default BuildDescription;
