import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './desktop.css';
import LoginOrRegisterModal from '../auth/LoginOrRegisterModal';
import PublishBuildModal from './PublishBuildModal';
import UI from '../../utils/translations';

export default function PublishBuildButton() {
  const language = useSelector((state) => state.language.currentLanguage);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={
          isAuthenticated ? '#publishBuildModal' : '#loginOrRegisterModal'
        }
        style={{ position: 'relative', zIndex: 999 }}
      >
        {UI['Publish'][language]}
      </button>
      <LoginOrRegisterModal />
      <PublishBuildModal />
    </Fragment>
  );
}
