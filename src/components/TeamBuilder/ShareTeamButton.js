import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import UI from '../../utils/translations';

const ShareTeamButton = () => {
  const language = useSelector((state) => state.language.currentLanguage);
  return (
    <Button
      variant="outlined"
      data-toggle="modal"
      data-target="#shareTeamModal"
      style={{ marginLeft: 8 }}
    >
      {UI['Share'][language]}
    </Button>
  );
};

export default ShareTeamButton;
