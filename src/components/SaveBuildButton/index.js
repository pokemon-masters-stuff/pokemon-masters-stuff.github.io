import React from 'react';
import Button from '@material-ui/core/Button';

const SaveBuildButton = props => (
  <Button variant="outlined" onClick={props.onClickHandler}>
    Save Build
  </Button>
);

export default SaveBuildButton;
