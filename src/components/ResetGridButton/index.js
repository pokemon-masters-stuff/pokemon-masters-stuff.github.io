import React from 'react';
import PropTypes from 'prop-types';

const ResetGridButton = (props) => {
  const {onClickHandler} = props;

  const handleOnClick = () => onClickHandler ? onClickHandler() : false;

  return (
    <button
      type="button"
      className="btn btn-warning"
      onClick={handleOnClick}
    >
      Reset
    </button>);
};

ResetGridButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default ResetGridButton;
