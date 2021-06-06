import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PublishTeamModal from './PublishTeamModal';
import './desktop.css';
import Button from '@material-ui/core/Button';
import UI from '../../utils/translations';

const PublishTeamButton = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Button
        variant="outlined"
        data-toggle="modal"
        data-target={
          isAuthenticated ? '#publishTeamModal' : '#loginOrRegisterModal'
        }
      >
        {UI['Publish this build'][language]}
      </Button>
      <PublishTeamModal />
    </Fragment>
  );
};

export default PublishTeamButton;
