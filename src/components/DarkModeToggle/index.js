import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../actions/actionCreators';

const DarkModeToggle = () => {
  const darkMode = useSelector(state => state.darkMode.mode);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    darkMode
      ? document.body.classList.remove('dark-mode')
      : document.body.classList.add('dark-mode');
    dispatch(changeMode());
  };

  return (
    <button
      type="button"
      className="btn btn-dark ml-2"
      onClick={handleOnClick}
      style={{ position: 'relative', zIndex: 999 }}
    >
      Dark Mode
    </button>
  );
};

export default DarkModeToggle;
