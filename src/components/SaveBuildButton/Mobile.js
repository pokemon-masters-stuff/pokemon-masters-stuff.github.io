import React from 'react';
import Button from '@material-ui/core/Button';

const SaveBuildButton = (props) => (
  <Button variant="outlined" onClick={props.onClickHandler}>
    {props.UI['Save Build'][props.language]}
  </Button>
);

export default SaveBuildButton;
