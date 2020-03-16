import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';

const LoginOrRegisterModal = () => {
  const darkMode = useSelector(state => state.darkMode.mode);
  return (
    <Fragment>
      <div
        className="modal fade"
        id="loginOrRegisterModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style={{ zIndex: 1900 }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className={`modal-content ${
              darkMode ? 'text-white bg-dark' : null
            }`}
          >
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Please login or register
              </h4>
            </div>
            <div className="modal-body mx-3">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                data-toggle="modal"
                data-target="#loginModal"
                data-dismiss="modal"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                data-toggle="modal"
                data-target="#registerModal"
                data-dismiss="modal"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <Login />
      <Register />
    </Fragment>
  );
};

export default LoginOrRegisterModal;
