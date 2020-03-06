import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGrids } from '../../actions/actionCreators';

const ResetGridButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(resetGrids());
  };

  return (
    <button
      type="button"
      className="btn btn-warning ml-2"
      onClick={handleOnClick}
      style={{ position: 'relative', zIndex: 999 }}
    >
      Reset
    </button>
  );
};

export default ResetGridButton;
