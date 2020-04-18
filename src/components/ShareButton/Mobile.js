import React from 'react';
import Button from '@material-ui/core/Button';

const ShareButton = (props) => (
  <Button variant="outlined" onClick={props.onClickHandler}>
    {props.UI['Share'][props.language]}
  </Button>
);

export default ShareButton;
