import React from 'react';
import Button from '@material-ui/core/Button';

const PublishBuildButton = props => (
  <Button variant="outlined" onClick={props.onClickHandler}>
    Publish Build
  </Button>
);

export default PublishBuildButton;
