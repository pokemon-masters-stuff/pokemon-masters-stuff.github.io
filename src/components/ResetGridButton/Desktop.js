import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGrids } from '../../actions/actionCreators';

const ResetGridButtonDesktop = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(resetGrids());

  return (
    <button
      type="button"
      className="btn btn-warning ml-2"
      onClick={handleOnClick}
    >
      Reset
    </button>
  );
};

export default ResetGridButtonDesktop;
