import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const AnnouncementModal = ({ handleClick }) => (
  <IconButton style={{ color: 'white' }} onClick={handleClick}>
    <InfoIcon />
  </IconButton>
);

export default AnnouncementModal;
