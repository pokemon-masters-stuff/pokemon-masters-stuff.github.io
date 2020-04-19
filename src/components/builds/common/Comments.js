import React from 'react';
import { useSelector } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CommentItem from './CommentItem';
import Button from '@material-ui/core/Button';
import AddCommentModal from './AddCommentModal';
import UI from '../../../utils/translations';

const Comments = ({ classes, build }) => {
  const language = useSelector((state) => state.language.currentLanguage);
  return (
    <ExpansionPanel className={classes.expanded}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          {UI['Comments'][language]} ({build.comments.length || 0})
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{
          flexDirection: 'column',
          paddingLeft: 10,
          paddingRight: 10,
          display: 'inline-block',
          width: '100%',
          wordBreak: 'break-word',
          whiteSpace: 'pre-line',
        }}
      >
        {build.comments
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((comment) => (
            <CommentItem key={comment._id} build={build} comment={comment} />
          ))}
        <div style={{ height: 25 }}></div>
        <Button
          style={{ width: 300, left: '50%', transform: 'translateX(-50%)' }}
          variant="outlined"
          data-toggle="modal"
          data-target={`#addComment${build._id}`}
        >
          {UI['Add a comment'][language]}
        </Button>
      </ExpansionPanelDetails>
      <AddCommentModal index={build._id} />
    </ExpansionPanel>
  );
};

export default Comments;
