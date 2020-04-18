import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';
import UI from '../../utils/translations';

const LoginOrRegisterModal = () => {
  const darkMode = useSelector((state) => state.darkMode.mode);
  const language = useSelector((state) => state.language.currentLanguage);

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
                {UI['Please login or register'][language]}
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
                {UI['Login'][language]}
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                data-toggle="modal"
                data-target="#registerModal"
                data-dismiss="modal"
              >
                {UI['Register'][language]}
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
