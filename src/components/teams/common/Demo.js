import React from 'react';
import { useSelector } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import UI from '../../../utils/translations';
import ReactPlayer from 'react-player';

const Demo = ({ classes, url, size }) => {
  // const language = useSelector((state) => state.language.currentLanguage);
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
          {/* {UI['Demo'][language]} */}
          Demo
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center',
        }}
      >
        <div className="player-wrapper">
          {size === 'large' ? (
            <ReactPlayer
              key={url}
              url={url}
              className="react-player"
              controls={true}
              muted={true}
            />
          ) : (
            <ReactPlayer
              key={url}
              url={url}
              className="react-player"
              controls={true}
              width="100%"
              muted={true}
            />
          )}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Demo;
