import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteComment } from '../../../actions/actionCreators';

const CommentItem = ({ build, comment }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.user);

  const handleClickDelete = () => {
    window.confirm('Are you sure you wish to delete this comment?') &&
      dispatch(deleteComment(build._id, comment._id));
  };

  const renderDeleteIcon = () => {
    return currentUser._id === comment.user ? (
      <IconButton
        value={comment}
        onClick={handleClickDelete}
        style={{ margin: 0, padding: 0, float: 'right', marginTop: -3 }}
      >
        <DeleteIcon className="svg_delete_icons" />
      </IconButton>
    ) : null;
  };

  return (
    <Card variant="outlined">
      <CardContent style={{ paddingBottom: 15 }}>
        <Typography
          color="textSecondary"
          style={{
            fontSize: 12
          }}
        >
          {comment.username} | {comment.date.substring(0, 10)}{' '}
          {renderDeleteIcon()}
        </Typography>

        <Typography
          style={{
            wordWrap: 'break-word'
          }}
        >
          {comment.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentItem;
