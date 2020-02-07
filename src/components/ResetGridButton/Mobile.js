import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { resetGrids } from '../../actions/actionCreators';

const ResetGridButtonMobile = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(resetGrids());

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      Reset
    </Button>
  );
};

export default ResetGridButtonMobile;
