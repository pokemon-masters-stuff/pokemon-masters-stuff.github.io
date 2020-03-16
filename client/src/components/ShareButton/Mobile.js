import React from 'react';
import Button from '@material-ui/core/Button';

const ShareButton = props => (
  <Button variant="outlined" onClick={props.onClickHandler}>
    Share
  </Button>
);

export default ShareButton;
