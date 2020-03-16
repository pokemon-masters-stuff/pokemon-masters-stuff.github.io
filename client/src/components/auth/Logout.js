import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/actionCreators';

const Logout = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button className="btn btn-dark" onClick={handleOnClick}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
