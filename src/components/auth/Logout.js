import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/actionCreators';
import UI from '../../utils/translations';

const Logout = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);

  const handleOnClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button className="btn btn-dark" onClick={handleOnClick}>
        {UI['Logout'][language]}
      </button>
    </div>
  );
};

export default Logout;
