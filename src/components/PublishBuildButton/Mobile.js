import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PublishBuildModal from './PublishBuildModal';
import './desktop.css';
import Button from '@material-ui/core/Button';
import UI from '../../utils/translations';

const PublishBuildButton = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Button
        variant="outlined"
        data-toggle="modal"
        data-target={
          isAuthenticated ? '#publishBuildModal' : '#loginOrRegisterModal'
        }
      >
        {UI['Publish this build'][language]}
      </Button>
      <PublishBuildModal />
    </Fragment>
  );
};

export default PublishBuildButton;
